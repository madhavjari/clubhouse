const { Router } = require("express");
const { postDeleteMessage } = require("../controller/deleteController");

const deleteRouter = Router();

deleteRouter.post("/delete/:id", postDeleteMessage);

module.exports = deleteRouter;
