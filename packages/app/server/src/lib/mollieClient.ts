import { createMollieClient } from '@mollie/api-client';

const mollieKey = process.env.MOLLIE_API_KEY

if (!mollieKey) {
    console.log('No Mollie key provided.');
    process.exit(1)
}

const mollieClient = createMollieClient({ apiKey: mollieKey });

export default mollieClient