const express = require("express");
const router = express.Router();
const fs = require("fs");
const helpers = require("../helpers.js");
const constants = require("../constants.js");

const workouts = JSON.parse(
    fs.readFileSync(constants.workoutsJsonPath, "utf-8")
);

router
.route("/")
.get((req,res)=>{
    res.json(workouts);
})

router
.route("/:id")
.get((req,res) =>{
    const foundWorkout = helpers.getObjectByKey(
        workouts,
        req.params.id,
        "id"
    );
    helpers.handleResponse(res,req, foundWorkout)
})

module.exports = router;