const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(`SELECT * FROM members`);
  return rows;
}

module.exports = { getAllMessages };
