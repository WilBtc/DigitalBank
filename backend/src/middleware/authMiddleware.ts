import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface RequestWithUser extends Request {
    user?: JwtPayload | string;
}

const authenticate = (req: RequestWithUser, res: Response, next: NextFunction): void => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            res.status(401).send('No token provided');
            return;
        }

        const token = authHeader.split(' ')[1]; // Bearer <token>
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key') as JwtPayload;
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send('Invalid token');
    }
};

export default authenticate;
