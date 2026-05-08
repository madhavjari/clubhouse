const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(`SELECT firstname,timestamp, message 
    FROM messages JOIN members ON
    messages.member_id = members.id`);
  return rows;
}

async function addUser(firstName, lastName, username, password) {
  await pool.query(
    `INSERT INTO members (firstname, lastname, username, password, status) 
    VALUES ($1,$2,$3,$4,$5)`,
    [firstName, lastName, username, password, "None"],
  );
}

async function getAllUsername() {
  const { rows } = await pool.query(`SELECT username FROM members`);
  return rows;
}

async function addMessage(messageData, timeStamp, memberId) {
  await pool.query(
    `
  INSERT INTO messages (member_id, title, message, timestamp)
  VALUES ($1,$2,$3,$4)`,
    [memberId, messageData.title, messageData.message, timeStamp],
  );
}

async function updateMemberStatus(memberId, status) {
  await pool.query("UPDATE members SET status = $1 WHERE id = $2", [
    status,
    memberId,
  ]);
}

module.exports = {
  getAllMessages,
  addUser,
  getAllUsername,
  addMessage,
  updateMemberStatus,
};
