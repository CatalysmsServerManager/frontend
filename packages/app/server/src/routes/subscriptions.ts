import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client'
import { asyncRoute } from '../lib/asyncRoute';
import { loggedIn, getUserFromRequest } from '../lib/middleware/auth';

const prisma = new PrismaClient()

router.get('/', loggedIn, asyncRoute(async function (req, res) {
    const subs = await prisma.subscription.findMany({
        where: { userId: { equals: getUserFromRequest(req).id } },
        include: {
            product: { select: { name: true, price: true } },
        }
    });
    return res.send(subs);
}));

export default router;
