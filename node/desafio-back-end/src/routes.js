const express = require("express");
const ToolsController = require("./controllers/tools");   
const routes = express.Router();

routes.get("/tools", ToolsController.list);
routes.post("/tools", ToolsController.create);
routes.delete("/tools/:id", ToolsController.delete);

module.exports = routes;
