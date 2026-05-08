const db = require("../db/queries");

async function postMessage(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }

  const timeStamp = new Date();
  const memberId = req.user.id;
  const messageData = req.body;
  await db.addMessage(messageData, timeStamp, memberId);
  res.redirect("/");
}

module.exports = { postMessage };
