import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export function loggedIn(req: Request, res: Response, next: NextFunction): void {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.redirect('/api/auth/steam');
    }
}


export function getUserFromRequest(req: Request): User {
    return req.user as User;
}