const db = require("../db/queries");

async function getHomePage(req, res) {
  const messages = await db.getAllMessages();
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return res.render("dashboard", {
      title: "Madhav's Club",
      user: req.user,
    });
  }
  res.render("index", {
    title: "Madhav's Club",
    messages: messages,
    user: req.user,
  });
}

module.exports = { getHomePage };
