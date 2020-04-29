const routes = require("express").Router();
const parser = require("./api/parser")
const receipt = require("./api/receipt")

routes.use("/parser", parser);
routes.use("/receipt", receipt);

module.exports = routes;
