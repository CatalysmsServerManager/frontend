import supertest from 'supertest';
import { Express, NextFunction, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { expect } from 'chai';

const prisma = new PrismaClient()

describe('ROUTER Subscriptions', () => {
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
        });

        await prisma.user.upsert({
            where: { id: 'test-user2' },
            update: {
                id: 'test-user2',
                name: 'jef',
                steamId: '48993214',
            },
            create: {
                id: 'test-user2',
                name: 'jef',
                steamId: '48993214',
            }
        });

        await prisma.product.upsert({
            create: { name: 'test', description: 'wow so cool', price: 1000 },
            where: { name: 'test' },
            update: { name: 'test', description: 'wow so cool', price: 1000 }
        });

        await prisma.subscription.upsert({
            where: { id: 'test-sub1' },
            create: {
                id: 'test-sub1',
                user: { connect: { id: 'test-user' } },
                product: { connect: { name: 'test' } }
            },
            update: {
                id: 'test-sub1',
                user: { connect: { id: 'test-user' } },
                product: { connect: { name: 'test' } }
            }
        });

        await prisma.subscription.upsert({
            where: { id: 'test-sub2' },
            create: {
                id: 'test-sub2',
                user: { connect: { id: 'test-user2' } },
                product: { connect: { name: 'test' } }
            },
            update: {
                id: 'test-sub2',
                user: { connect: { id: 'test-user2' } },
                product: { connect: { name: 'test' } }
            }
        })

        app = require('../app').getApp();
    })

    describe('GET /api/subscription', () => {
        it('Happy path yay', async () => {
            return supertest(app)
                .get('/api/subscription/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body).to.be.an('array');
                })
        })

        it('Only returns the subscriptions of the current user', async () => {
            return supertest(app)
                .get('/api/subscription/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body).to.be.an('array');
                    expect(response.body.length).to.be.equal(1);

                    for (const sub of response.body) {
                        // Session in tests is hardcoded to test-user
                        expect(sub.userId).to.be.equal('test-user')
                    }
                })
        })
    })
})