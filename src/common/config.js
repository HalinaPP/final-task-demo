const dotenv  = require( 'dotenv');
const path  = require( 'path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const config = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  dbConfig: {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
  },
};

module.exports =  config;
