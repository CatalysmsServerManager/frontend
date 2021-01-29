import { NextFunction, Request, Response } from "express";

export function loggedIn(req: Request, res: Response, next: NextFunction): void {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.redirect('/auth/steam');
    }
}


export function getUserFromRequest(req: Request): Express.User {
    return req.user;
}