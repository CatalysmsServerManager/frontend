import express from 'express';
const router = express.Router();
import { PrismaClient } from '@prisma/client'
import { asyncRoute } from '../lib/asyncRoute';

const prisma = new PrismaClient()

router.get('/', asyncRoute(async function (req, res) {
  const products = await prisma.product.findMany();
  return res.send(products);
}));



router.post('/webhook', function (req, res) {
  console.log('WEBHOOK WAS CALLED');

  console.log(req.params);
  console.log(req.headers);
  console.log(req.body);
  res.status(200)
});

router.get('/buy', asyncRoute(async function (req, res) {

  // getCustomer() // We need a mollie ID to create payment
  // if customer === undefined => Error
  // Else createPayment()
  // Wait for webhook or smth...

  //res.send('respond with a product');
}));

export default router;
