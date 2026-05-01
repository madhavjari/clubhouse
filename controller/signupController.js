const db = require("../db/queries");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const { body, validationResult, matchedData } = require("express-validator");

async function getSignup(req, res) {
  res.render("signup", {
    title: "Sign-up",
  });
}
async function postSignup(req, res) {
  console.log(req.body);
  const errors = validationResult(req);
  console.log("err= ", errors);
  console.log(req.body);
  if (!errors.isEmpty()) {
    return res.status(400).render("signup", {
      title: "Sign-Up",
      errors: errors.array(),
    });
  }
  const { firstName, lastName, username, password } = matchedData(req);
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.addUser({ firstName, lastName, username, hashedPassword });
  res.redirect("/");
}

module.exports = { getSignup, postSignup };
