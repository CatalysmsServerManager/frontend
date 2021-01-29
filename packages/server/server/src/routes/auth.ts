import express from 'express';
import passport from 'passport'
import { Strategy as SteamStrategy } from 'passport-steam'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router();

interface SteamUser extends Express.User {
    id: string
    displayName: string
}

passport.serializeUser(function (user, done) {
    return done(null, user);
});

passport.deserializeUser(function (user, done) {

    if (!user) {
        return done(new Error('Unknown user'))
    }

    return done(null, user as Express.User);
});

passport.use(new SteamStrategy({
    returnURL: `${process.env.HOSTNAME}/auth/steam/return`,
    realm: `${process.env.HOSTNAME}/`,
    apiKey: process.env.STEAM_API_KEY
},
    function (identifier: any, profile: any, done: (arg0: any, arg1: any) => any) {
        return done(null, profile)
    }
));

router.get('/steam',
    passport.authenticate('steam'),
    function (req, res) {
        res.redirect('/');
    });

router.get('/steam/return', passport.authenticate('steam'), async (req, res) => {
    console.log('return route');

    if (!req.user) {
        throw new Error('Unknown user')
    }

    const user: SteamUser = req.user as SteamUser;
    console.log(user);

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
    res.redirect('/')

});

export default router
