import express from 'express';
import { createCustomer } from '../lib/createCustomer';
const router = express.Router();

router.get('/', function (req, res) {
  res.send(req.body);
});

router.post('/webhook', function (req, res) {
  console.log('WEBHOOK WAS CALLED');

  console.log(req.params);
  console.log(req.headers);
  console.log(req.body);
  res.status(200)
});

router.get('/buy', async function (req, res) {

  // getCustomer() // We need a mollie ID to create payment
  // if customer === undefined => Error
  // Else createPayment()
  // Wait for webhook or smth...

  //res.send('respond with a product');
});

export default router;
