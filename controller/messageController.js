const db = require("../db/queries");

async function postMessage(req, res) {
  const timeStamp = new Date();
  const memberId = req.params.id;
  const messageData = await req.body;
  console.log(messageData, timeStamp, memberId);
  await db.addMessage(messageData, timeStamp, memberId);
  res.redirect("/");
}

module.exports = { postMessage };
