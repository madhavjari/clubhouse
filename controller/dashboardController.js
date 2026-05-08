const db = require("../db/queries");

async function getDashboard(req, res) {
  const messages = await db.getAllMessages();
  res.render("dashboard", {
    title: "Dashboard",
    user: req.user,
    messages: messages,
  });
}

module.exports = { getDashboard };
