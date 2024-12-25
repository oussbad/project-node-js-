const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: false
  },
  logging: false,
  retry: {
    match: [/ECONNREFUSED/],
    max: 5, // Number of retry attempts
  }
});

sequelize
  .authenticate()
  .then(() => console.log('Database connection established.'))
  .catch((err) => console.error('Unable to connect to the database:', err));


module.exports = sequelize;
