import express from 'express';
import { corsMiddleware } from './middleware/corsMiddleware';
import { loggingMiddleware } from './middleware/loggingMiddleware';
import { rateLimitMiddleware } from './middleware/rateLimitMiddleware';
import { helmetMiddleware } from './middleware/helmetMiddleware';
import { validateUser } from './middleware/validationMiddleware';
import { sessionMiddleware } from './middleware/sessionMiddleware';
import { enforceHttpsMiddleware } from './middleware/enforceHttpsMiddleware';
import { apiKeyAuthMiddleware } from './middleware/apiKeyAuthMiddleware';
// Import route handlers
// import userRoutes from './routes/userRoutes';
// import transactionRoutes from './routes/transactionRoutes';
// import other routes as needed

// Initialize express app
const app = express();

// Middleware usage
app.use(express.json({ limit: '10kb' })); // Limit to 10KB
app.use(corsMiddleware);
app.use(loggingMiddleware);
app.use(rateLimitMiddleware);
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(sessionMiddleware);
app.use(enforceHttpsMiddleware);
app.use(apiKeyAuthMiddleware);

// Database connection setup (if applicable)
// connectDB();

// Define routes
// app.use('/api/users', userRoutes);
// app.use('/api/transactions', transactionRoutes);
// ... use other route handlers as needed

// Error handling middleware (if you have custom error handling)
// app.use(errorHandler);

// Start the server
app.post('/register', validateUser, (req, res) => {
    // Registration logic
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
