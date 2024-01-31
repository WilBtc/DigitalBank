// backend/src/utils/generalUtils.js

/**
 * Formats a number to a fixed number of decimal places.
 * @param {number} number The number to format.
 * @param {number} decimals The number of decimal places.
 * @returns {number} The formatted number.
 */
const formatNumber = (number, decimals = 2) => {
    return parseFloat(number.toFixed(decimals));
};

/**
 * Validates an email address.
 * @param {string} email The email to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};

module.exports = {
    formatNumber,
    validateEmail
};
