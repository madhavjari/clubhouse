const { Router } = require("express");
const {
  getJoinClub,
  postJoinClub,
} = require("../controller/joinclubController");

const joinclubRouter = Router();

joinclubRouter.get("/joinclub", getJoinClub);

joinclubRouter.post("/joinclub", postJoinClub);

module.exports = joinclubRouter;
