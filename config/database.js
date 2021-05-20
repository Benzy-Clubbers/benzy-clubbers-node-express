const { Pool } = require("pg");
require("dotenv").config();

// config the db credentials from env
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
  port: 5432,
});

// connect to db
pool.on("connect", () => {
  console.log("Database Connection Success!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
