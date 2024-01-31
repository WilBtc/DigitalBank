// backend/src/models/Account.js

const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    accountType: {
        type: String,
        required: true,
        enum: ['USD', 'Bitcoin', 'SecurityTokens', 'Investment']
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    // Additional fields as necessary
});

module.exports = mongoose.model('Account', accountSchema);
