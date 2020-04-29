const port = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const routes = require("./routes/router");

const api = express();

api.use(helmet());
api.use(bodyParser.json())

api.use("/api", routes);

// Routes
api.get("/", (req, res) => {
    res.send("Hallo, I'm running bitch!");
});



api.listen(port, () => {
    console.log(`Servidor está executando na porta ${port}.`)
})
