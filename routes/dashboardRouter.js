const { Router } = require("express");
const dashboardController = require("../controller/dashboardController");

const dashboardRouter = Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/");
}

dashboardRouter.get(
  "/dashboard",
  ensureAuthenticated,
  dashboardController.getDashboard,
);

module.exports = dashboardRouter;
