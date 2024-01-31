import dotenv from 'dotenv';

dotenv.config();

interface Config {
    mongoURI: string;
    jwtSecret: string;
    bitcoinAPI: string;
    apiPort: number;
    // Add other configuration types as needed
}

const config: Config = {
    mongoURI: process.env.MONGO_URI || 'default_mongodb_uri',
    jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',
    bitcoinAPI: 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
    apiPort: parseInt(process.env.API_PORT || '3000', 10),
    // Additional configuration settings
};

export default config;
