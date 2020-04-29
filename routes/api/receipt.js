const routes = require("express").Router();
const tesseract = require("node-tesseract-ocr");

const config = {
    lang: "deu",
    oem: 1,
    psm: 3,
};

const get = (req, res, next) => {
    res.send("receipt get OK");
};

const post = (req, res, next) => {

    // tesseract.recognize("C:/Git/Github/ws-nodejs/myreceipt/img/ReceiptSwiss.jpg", config)
    //     .then(text => {
    //         res.send(text);
    //         //console.log("Result:", text)
    //     })
    //     .catch(error => {
    //         res.send(error.message);
    //     });

    tesseract.recognize("C:/Git/Github/ws-nodejs/myreceipt/img/plakat.jpg", config)
        .then(text => {
            res.send(text);
        })
        .catch(error => {
            res.send(error.message);
        });
};

routes.get("/", get);
routes.post("/", post);

module.exports = routes;
