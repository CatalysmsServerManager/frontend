import supertest from 'supertest';
import { Express, NextFunction, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { expect } from 'chai';

const prisma = new PrismaClient()

describe('ROUTER Products', () => {
    let app: Express;
    before(async () => {

        await prisma.product.upsert({
            create: { name: 'test', description: 'wow so cool', price: 1000 },
            where: { name: 'test' },
            update: { name: 'test', description: 'wow so cool', price: 1000 }
        });

        await prisma.product.upsert({
            create: { name: 'test2', description: 'amazing thing!', price: 1337 },
            where: { name: 'test2' },
            update: { name: 'test2', description: 'amazing thing!', price: 1337 }
        });

        app = require('../app').getApp();
    })

    describe('GET /api/product', () => {
        it('Happy path yay', async () => {
            return supertest(app)
                .get('/api/product/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                    expect(response.body).to.be.an('array');
                })
        })
    })
})