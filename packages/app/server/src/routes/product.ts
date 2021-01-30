import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client'
import { asyncRoute } from '../lib/asyncRoute';
import mollieClient from '../lib/mollieClient';
import { getUserFromRequest, loggedIn } from '../lib/middleware/auth';
import createHttpError from 'http-errors';
import { SequenceType } from '@mollie/api-client';
import currency from 'currency.js';

const prisma = new PrismaClient()

router.get('/', asyncRoute(async function (req, res) {
  const products = await prisma.product.findMany();
  return res.send(products);
}));


router.get('/buy', loggedIn, asyncRoute(async function (req, res) {
  const user = getUserFromRequest(req)

  if (!user.mollieId) {
    return res.send(createHttpError(400, 'No Mollie ID, please log out and back in.'))
  }

  if (!req.query.productId) {
    return res.send(createHttpError(400, 'No product ID given, please select one.'))
  }

  const product = await prisma.product.findUnique({ where: { id: req.query.productId as string } })

  const payment = await mollieClient.payments.create({
    sequenceType: SequenceType.first,
    customerId: user.mollieId,
    description: 'First payment',
    amount: { currency: 'EUR', value: currency(product.price, { fromCents: true }).toString() },
    redirectUrl: `${process.env.HOSTNAME}/api/product/bought`,
    webhookUrl: `${process.env.HOSTNAME}/api/mollie/webhook`,
    metadata: {
      productId: product.id,
      userId: user.id
    }
  })

  res.redirect(payment.getCheckoutUrl());
}));

router.get('/bought', loggedIn, asyncRoute(async function (req, res) {
  console.log(req.query);
  console.log(req.headers);

  res.redirect('/');
}));

export default router;
