const { Router } = require("express");
const messageController = require("../controller/messageController");

const messageRouter = Router();

messageRouter.post("/:id", messageController.postMessage);

module.exports = messageRouter;
