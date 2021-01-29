import createError from 'http-errors';
import express, { ErrorRequestHandler, Express } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session'
import passport from 'passport'

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import productsRouter from './routes/product';
import authRouter from './routes/auth';


export const getApp = (): Express => {
  console.log('Creating a new app instance');

  const app = express();

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session({ secret: process.env.SESSION_SECRET as string, resave: true, saveUninitialized: false }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/product', productsRouter);
  app.use('/auth', authRouter);

  app.use(function (req, res) {
    return res.send(createError(404))
  });

  const errorHandler: ErrorRequestHandler = function (err, req, res) {
    return res.send(createError(err.status || 500))
  }

  // error handler
  app.use(errorHandler);
  return app;
}

