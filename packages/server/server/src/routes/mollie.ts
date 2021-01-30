import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client'
import { asyncRoute } from '../lib/asyncRoute';
import mollieClient from '../lib/mollieClient';

const prisma = new PrismaClient()

router.post('/webhook', asyncRoute(async function (req, res) {
    console.log('WEBHOOK WAS CALLED');

    console.log(req.params);
    console.log(req.headers);
    console.log(req.body);

    const payment = await mollieClient.payments.get(req.body.id);

    console.log(payment);

    if (payment.status === 'paid') {
        const user = await prisma.user.findUnique({ where: { mollieId: payment.customerId } });
        if (!user) {
            console.log('No user with this Mollie ID found');
            return res.end();
        }

        await prisma.subscription.upsert({
            where: { productId_userId: { productId: payment.metadata.productId, userId: payment.metadata.userId } },
            create: { mandateId: payment.mandateId, productId: payment.metadata.productId, userId: payment.metadata.userId },
            update: { mandateId: payment.mandateId }
        });
    }

    res.status(200)
    res.end();
}));


export default router;
