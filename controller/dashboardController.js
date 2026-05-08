const db = require("../db/queries");

async function getDashboard(req, res) {
  const messages = await db.getAllMessages();
  const status = await db.getStatus(parseInt(req.user.id));
  res.render("dashboard", {
    title: "Dashboard",
    user: req.user,
    messages: messages,
    status: status.status,
  });
}

module.exports = { getDashboard };
