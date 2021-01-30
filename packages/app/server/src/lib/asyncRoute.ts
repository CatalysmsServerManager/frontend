import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const asyncRoute = (fn: (req: Request, res: Response, next: NextFunction) => void) =>
    (req: Request, res: Response, next: NextFunction): void => {
        Promise.resolve(fn(req, res, next))
            .catch(e => {
                console.log(e);
                next(createHttpError(500))

            });
    };