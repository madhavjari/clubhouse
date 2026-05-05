const passport = require("passport");

async function getLogin(req, res) {
  res.render("login", {
    title: "Log-in",
  });
}

const postLogin = passport.authenticate("local", {
  successRedirect: "/dashboard",
  failureRedirect: "/login",
});

module.exports = { getLogin, postLogin };
