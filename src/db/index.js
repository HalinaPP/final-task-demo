const { Sequelize } = require('sequelize');
const { Pool } = require('pg');
const config = require('../common/config');
const { logger } = require('../common/logging');

const sequelize = new Sequelize({
  database: 'gsp-final-task',
  username: 'postgres',
  password: 'postgres',
  dialect: 'postgres',
});

const connectDb = async () => {
  await sequelize.authenticate();
};

try {
  // eslint-disable-next-line no-void
  void connectDb();
} catch (error) {
  logger.error("database cann't connected");
  process.exit(-1);
}

const pool = new Pool(config.dbConfig);

pool.on('error', () => {
  logger.error("database cann't connected");
  process.exit(-1);
});

const db = {
  query: (text, params) => pool.query(text, params),
  close: () => pool.end(),
};

module.exports = { sequelize, db }
