// backend/src/models/Transaction.js

const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['deposit', 'withdrawal', 'transfer'] // Add more types as necessary
    },
    // Include additional fields like transaction date, status, etc.
    transactionDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);
