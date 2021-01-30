import * as auth from '../src/lib/middleware/auth'
import sinon from 'sinon'
import { NextFunction, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

before(async () => {
    const testUser = await prisma.user.upsert({
        where: { id: 'test-user' },
        update: {
            id: 'test-user',
            name: 'jos',
            steamId: '5465465',
        },
        create: {
            id: 'test-user',
            name: 'jos',
            steamId: '5465465',
        }
    })
    sinon
        .stub(auth, 'loggedIn')
        .callsFake((req: Request, res: Response, next: NextFunction) => next())

    sinon
        .stub(auth, 'getUserFromRequest')
        .returns(testUser)
})