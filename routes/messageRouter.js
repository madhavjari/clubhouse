const { Router } = require("express");
const messageController = require("../controller/messageController");

const messageRouter = Router();

messageRouter.post("/messages", messageController.postMessage);

module.exports = messageRouter;
