const db = require("../db/queries");

async function getHomePage(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", {
    title: "Madhav's Club",
    messages: messages,
  });
}

module.exports = { getHomePage };
