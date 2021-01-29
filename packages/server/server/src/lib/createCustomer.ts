import mollie from './mollieClient';


export async function createCustomer(id: string, email: string, name: string) {
    // Check if user exists first...

    const customer = await mollie.customers.create({ email, name, metadata: { internalId: id } });
    console.log(customer);
    return customer;

}