const db = require("../db/queries");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const { validationResult, matchedData } = require("express-validator");

async function getSignup(req, res) {
  res.render("signup", {
    title: "Sign-up",
  });
}
async function postSignup(req, res) {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).render("signup", {
      title: "Sign-Up",
      errors: errors.array(),
    });
  }
  const { firstname, lastname, username, password } = matchedData(req);
  console.log("data", firstname);
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.addUser(firstname, lastname, username, hashedPassword);
  res.redirect("/");
}

module.exports = { getSignup, postSignup };
