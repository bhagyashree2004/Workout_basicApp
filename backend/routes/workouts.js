const express = require("express");
const Workout = require("../models/workoutModel.js")
const {createWorkout, getWorkout, getallWorkouts, deleteWorkout, updateWorkout} = require("../controllers/workoutController.js")

const router = express.Router();


//GET all workouts
router.get('/', getallWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a single workout
router.delete('/:id', deleteWorkout)

//PATCH (Update) a workout
router.patch('/:id', updateWorkout)    


module.exports = router;