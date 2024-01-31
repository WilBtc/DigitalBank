// apiKeyAuthMiddleware.ts
import { Request, Response, NextFunction } from 'express';

export const apiKeyAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.header('X-API-Key');
    if (apiKey && apiKey === 'your_api_key_here') {
        next();
    } else {
        res.status(401).send('Unauthorized: Invalid API Key');
    }
};
