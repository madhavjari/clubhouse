const db = require("../db/queries");

async function postDeleteMessage(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }

  const status = await db.getStatus(parseInt(req.user.id));
  if (!status || status.status !== "Admin") {
    return res.sendStatus(403);
  }

  const messageId = req.params.id;
  await db.deleteMessage(messageId);
  res.redirect("/");
}

module.exports = { postDeleteMessage };
