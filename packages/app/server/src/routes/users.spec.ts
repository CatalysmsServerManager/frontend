import supertest from 'supertest';
import sinon from 'sinon';
import { Express, NextFunction, Request, Response } from 'express'
import * as auth from '../lib/middleware/auth'
import { PrismaClient } from '@prisma/client'
import { expect } from 'chai';

const prisma = new PrismaClient()

describe('ROUTER Users', () => {
    let loggedInStub: any;
    let app: Express;
    before(async () => {

        await prisma.user.upsert({
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

        app = require('../app').getApp();
    })

    describe('POST /users', () => {
        it('Happy path yay', async () => {
            return supertest(app)
                .post('/users/')
                .send({ email: 'test@example.com', name: 'john' })
                .expect(200)
                .then(() => prisma.user.findUnique({ where: { id: 'test-user' } }))
                .then(user => {
                    expect(user.email).to.be.equal('test@example.com')
                    expect(user.name).to.be.equal('john')
                })
        })
        xit('Redirects when user is not logged in', async () => {
            return supertest(app)
                .post('/users/')
                .expect(302)
                .expect('Location', '/auth/steam')
        })


        it('Rejects bad email addresses', async () => {
            return supertest(app)
                .post('/users/')
                .send({ email: 'not an email', name: 'john' })
                .expect(400)
        })
        it('Rejects when no email given', async () => {
            return supertest(app)
                .post('/users/')
                .send({ name: 'john' })
                .expect(400)
        })
        it('Rejects when no name given', async () => {
            return supertest(app)
                .post('/users/')
                .send({ email: 'test@example.com', })
                .expect(400)
        })

    })
})