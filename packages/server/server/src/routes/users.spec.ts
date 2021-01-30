import supertest from 'supertest';
import { Express } from 'express'
import { PrismaClient } from '@prisma/client'
import { expect } from 'chai';

const prisma = new PrismaClient()

describe('ROUTER Users', () => {
    let app: Express;
    before(async () => {
        app = require('../app').getApp();
    })

    describe('POST /api/users', () => {
        it('Happy path yay', async () => {
            return supertest(app)
                .post('/api/users/')
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
                .post('/api/users/')
                .expect(302)
                .expect('Location', '/auth/steam')
        })


        it('Rejects bad email addresses', async () => {
            return supertest(app)
                .post('/api/users/')
                .send({ email: 'not an email', name: 'john' })
                .expect(400)
        })
        it('Rejects when no email given', async () => {
            return supertest(app)
                .post('/api/users/')
                .send({ name: 'john' })
                .expect(400)
        })
        it('Rejects when no name given', async () => {
            return supertest(app)
                .post('/api/users/')
                .send({ email: 'test@example.com', })
                .expect(400)
        })

    })
})