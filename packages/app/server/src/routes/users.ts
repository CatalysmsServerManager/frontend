import express from 'express';
import { getUserFromRequest, loggedIn } from '../lib/middleware/auth';
import { PrismaClient } from '@prisma/client'
import createHttpError from 'http-errors';

const prisma = new PrismaClient()
const router = express.Router();

// https://emailregex.com/
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

router.post('/', loggedIn, async function (req, res, next) {
  const { name, email } = req.body;

  if (!email) {
    return next(createHttpError(400, 'Email is required'));
  }

  if (!name) {
    return next(createHttpError(400, 'name is required'));
  }

  if (!emailRegex.test(email)) {
    return next(createHttpError(400, 'Not a valid email address'));

  }

  try {
    await prisma.user.update({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      where: { id: getUserFromRequest(req).id },
      data: {
        email,
        name,
      }
    })
  } catch (error) {
    console.log(error);
    return next(createHttpError(500))
  }


  res.status(200);
  return res.end()
});

export default router
