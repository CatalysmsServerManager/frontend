import express from 'express';
import passport from 'passport'
import { Strategy as SteamStrategy } from 'passport-steam'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router();

export interface SteamUser {
    id: string
    displayName: string
}

passport.serializeUser(async function (user, done) {

    const dbUser = await prisma.user.findUnique({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        where: { steamId: user.id }
    });

    if (!dbUser) {
        return done(new Error('Unknown user'))
    }

    return done(null, dbUser.id);
});

passport.deserializeUser(async function (user: any, done) {
    if (!user) {
        return done(new Error('Unknown user'))
    }
    const dbUser = await prisma.user.findUnique({
        where: { id: user }
    });
    return done(null, dbUser as Express.User);
});

passport.use(new SteamStrategy({
    returnURL: `${process.env.HOSTNAME}/auth/steam/return`,
    realm: `${process.env.HOSTNAME}/`,
    apiKey: process.env.STEAM_API_KEY
},
    function (identifier: string, profile: SteamUser, done: (arg0: Error | null, arg1: SteamUser) => unknown) {
        return done(null, profile)
    }
));

router.get('/steam',
    passport.authenticate('steam'),
    function (req, res) {
        res.redirect('/');
    });

router.get('/steam/return', passport.authenticate('steam'), async (req, res) => {
    if (!req.user) {
        throw new Error('Unknown user')
    }

    const user: SteamUser = req.user as SteamUser;

    await prisma.user.upsert({
        where: { steamId: user.id },
        create: {
            name: user.displayName,
            steamId: user.id
        },
        update: {
            name: user.displayName
        },
    })

    res.status(200)
    res.redirect('/redirect')

});

export default router
