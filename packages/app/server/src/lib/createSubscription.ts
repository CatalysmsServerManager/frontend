/* import { PrismaClient, Product, User } from "@prisma/client";

import mollie from './mollieClient';


export async function createSubscription(user: User, product: Product) {
    mollie.payments.create({
        amount: {
            value: '10.00',
            currency: 'EUR'
        },
        description: 'My first API payment',
        redirectUrl: `${process.env.HOSTNAME}/products`,
        webhookUrl: `${process.env.HOSTNAME}/products/webhook`
    })
        .then(payment => {
            const checkoutUrl = payment.getCheckoutUrl();
            if (checkoutUrl) {
                res.redirect(checkoutUrl)
            }

        })
        .catch(error => {
            // Handle the error
            console.log(error);
        });

} */