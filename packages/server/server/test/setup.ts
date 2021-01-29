import * as auth from '../src/lib/middleware/auth'
import sinon from 'sinon'
import { NextFunction, Request, Response } from 'express'

before(async () => {

    sinon
        .stub(auth, 'loggedIn')
        .callsFake((req: Request, res: Response, next: NextFunction) => next())

    sinon
        .stub(auth, 'getUserFromRequest')
        .returns({ id: 'test-user' })
})