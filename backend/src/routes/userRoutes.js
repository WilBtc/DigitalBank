// backend/src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get user details
router.get('/:id', userController.getUserDetails);

// Additional user management routes can be added here

module.exports = router;
