import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

async function main() {

    await prisma.product.upsert({
        where: { name: 'CSMM 10' },
        create: {
            description: 'A test product',
            name: 'CSMM 10',
            price: 1000
        },
        update: {},
    })

}