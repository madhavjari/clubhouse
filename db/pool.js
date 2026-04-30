require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const connectionString = isProduction
  ? process.env.DB_URL
  : process.env.DB_URL_LOCAL;

module.exports = new Pool({
  connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});
