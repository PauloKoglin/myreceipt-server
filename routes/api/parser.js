const routes = require("express").Router();

const get = (req, res, next) => {
    res.send("parser get OK");
};

routes.get("/", get);

module.exports = routes;
