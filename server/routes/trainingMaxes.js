const express = require("express");
const router = express.Router();
const fs = require("fs");
const helpers = require("../helpers.js");
const constants = require("../constants.js");

const trainingMaxes = JSON.parse(
    fs.readFileSync(constants.trainingMaxesPath, "utf-8")
);

router
.route("/")
.get((req,res)=>{
    res.json(trainingMaxes);
})

module.exports = router;