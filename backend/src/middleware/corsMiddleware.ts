// corsMiddleware.ts
import cors from 'cors';

export const corsMiddleware = cors({
    origin: 'https://yourfrontenddomain.com', // Adjust 

    optionsSuccessStatus: 200 // For legacy browser support
});
