const { response } = require("express");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const constants = require("../constants.js");

const workouts = require('../data/workouts.json');

router.get('/',(req, res) => {
  res.json(workouts);
});

router.get('/:id', (req, res) => {
  const workoutId = req.params.id;
const foundWorkout = workouts.find(workout => workout.id === workoutId )
if (foundWorkout){
  res.json(foundWorkout)
}else{
  res.status(404).json({message: "workout not found"})
}
});

module.exports = router;
