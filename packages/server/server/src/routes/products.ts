import express from 'express';
const router = express.Router();
import { createMollieClient } from '@mollie/api-client';

const mollieKey = process.env.MOLLIE_API_KEY

if (!mollieKey) {
  console.log('No Mollie key provided.');
  process.exit(1)
}

const mollieClient = createMollieClient({ apiKey:  mollieKey});

router.get('/', function(req, res, next) {
  res.send(req.body);
});

router.post('/webhook', function(req, res, next) {
    console.log(req.params);
    console.log(req.headers);
    console.log(req.body);
  });

router.get('/buy', function(req, res, next) {

    mollieClient.payments.create({
        amount: {
          value:    '10.00',
          currency: 'EUR'
        },
        description: 'My first API payment',
        redirectUrl: 'http://localhost:3000/products',
        webhookUrl:  'some-ngrok-url/products/webhook'
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

    //res.send('respond with a product');
  });

export default router;
