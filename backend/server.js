const express = require('express');
const connectDB = require('./src/config/db'); // Database connection
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const transactionRoutes = require('./src/routes/transactionRoutes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Establishing database connection
connectDB();

// Middlewares
app.use(cors()); // Enables CORS
app.use(express.json()); // Parses incoming JSON requests

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);

// Error handling middleware
app.use(errorHandler);

// Starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
