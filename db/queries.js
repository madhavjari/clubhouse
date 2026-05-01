const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(`SELECT * FROM members`);
  return rows;
}

async function addUser({ firstName, lastName, username, password }) {
  await pool.query(
    `INSERT INTO members (firstname, lastname, username, password, status) 
    VALUES ($1,$2,$3,$4,$5)`,
    [firstName, lastName, username, password, "None"],
  );
}

module.exports = { getAllMessages, addUser };
