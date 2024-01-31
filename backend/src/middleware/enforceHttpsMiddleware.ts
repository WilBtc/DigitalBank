// enforceHttpsMiddleware.ts
import { Request, Response, NextFunction } from 'express';

export const enforceHttpsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.header('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
        next();
    }
};
