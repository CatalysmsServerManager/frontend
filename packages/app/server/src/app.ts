import createError from 'http-errors';
import express, { ErrorRequestHandler } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import productsRouter from './routes/products';

export const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res) {
  return res.send(createError(404))
});

const errorHandler: ErrorRequestHandler = function (err, req, res) {
  return res.send(createError(err.status || 500))
}

// error handler
app.use(errorHandler);

module.exports = app;
