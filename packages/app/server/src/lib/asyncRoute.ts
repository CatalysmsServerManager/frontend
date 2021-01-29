import { NextFunction, Request, Response } from "express";

export const asyncRoute = (fn: (req: Request, res: Response, next: NextFunction) => void) =>
    (req: Request, res: Response, next: NextFunction): void => {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    };