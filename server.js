const express = require("express");
const indexRouter = require("./routes/indexRouter");
const signupRouter = require("./routes/signupRouter");
const loginRouter = require("./routes/loginRouter");
const dashboardRouter = require("./routes/dashboardRouter");
const app = express();
const passport = require("passport");
const session = require("express-session");
const configurePassport = require("./config/passport");

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

configurePassport();
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());

app.use(indexRouter);
app.use(signupRouter);
app.use(loginRouter);
app.use(dashboardRouter);
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
