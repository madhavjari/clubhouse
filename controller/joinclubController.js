const db = require("../db/queries");

async function getJoinClub(req, res) {
  if (req.isAuthenticated()) {
    return res.render("joinclub", {
      title: "Join the club",
      user: req.user,
    });
  }
  res.redirect("/");
}

async function postJoinClub(req, res) {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }

  if (
    req.body.secret !== process.env.CLUB_PASSWORD &&
    req.body.secret !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(400).render("joinclub", {
      title: "Join the club",
      user: req.user,
      error: "That password is not quite right.",
    });
  }

  if (req.body.secret === process.env.CLUB_PASSWORD)
    await db.updateMemberStatus(req.user.id, "Member");
  if (req.body.secret === process.env.ADMIN_PASSWORD)
    await db.updateMemberStatus(req.user.id, "Admin");
  res.redirect("/");
}

module.exports = { getJoinClub, postJoinClub };
