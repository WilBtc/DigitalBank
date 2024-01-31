// sessionMiddleware.ts
import session from 'express-session';
import connectRedis from 'connect-redis';
import { createClient } from 'redis';

const RedisStore = new connectRedis(session);

// Create a Redis client
// For Redis version 4 or newer
const redisClient = createClient({
    url: 'redis://localhost:6379', //Redis server URL
});

// For older Redis versions, you might use redis.createClient();

redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.connect();

export const sessionMiddleware = session({
    store: new RedisStore({ client: redisClient }),
    secret: 'your_secret_key', //
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true, // Set to true if using HTTPS, false if HTTP
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
});
