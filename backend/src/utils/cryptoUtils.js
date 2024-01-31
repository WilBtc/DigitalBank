// backend/src/utils/cryptoUtils.js

const axios = require('axios');

const BTC_API_URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

/**
 * Fetches the current price of Bitcoin.
 * @returns {Promise<number>} The current price of Bitcoin in USD.
 */
const getCurrentBitcoinPrice = async () => {
    try {
        const response = await axios.get(BTC_API_URL);
        return response.data.bpi.USD.rate_float;
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        throw error;
    }
};

/**
 * Converts a given amount in USD to Bitcoin.
 * @param {number} usdAmount The amount in USD.
 * @returns {Promise<number>} The equivalent amount in Bitcoin.
 */
const convertUsdToBitcoin = async (usdAmount) => {
    const bitcoinPrice = await getCurrentBitcoinPrice();
    return usdAmount / bitcoinPrice;
};

module.exports = {
    getCurrentBitcoinPrice,
    convertUsdToBitcoin
};
