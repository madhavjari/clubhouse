const db = require("../db/queries");

async function getHomePage(req, res) {
  const messages = await db.getAllMessages();

  if (req.isAuthenticated()) {
    const status = await db.getStatus(parseInt(req.user.id));
    return res.render("dashboard", {
      title: "Madhav's Club",
      user: req.user,
      messages: messages,
      status: status.status,
    });
  }
  res.render("index", {
    title: "Madhav's Club",
    messages: messages,
    user: req.user,
  });
}

module.exports = { getHomePage };
