import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import WorkoutCard from "../../components/WorkoutCard/WorkoutCard";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./WorkoutPage.scss";

function WorkoutPage(props) {
  const [workoutDetails, setWorkoutDetails] = useState([]);
  useEffect(() => {
    getWorkouts(props);
  });

  const getWorkouts = (props) => {
    const workoutId = props.match.params.workoutId;
    axios.get(`http://localhost:8080/workouts/${workoutId}`).then((res) => {
      setWorkoutDetails(res.data);
    });
  };

  let exerciseList = workoutDetails.exercises;
  let exercises = "";

  if (exerciseList != null) {
    exercises = exerciseList.map((exercise) => {
      return (
        <WorkoutCard
          name={exercise.name}
          sets={exercise.sets}
          reps={exercise.reps}
          intensity={exercise.intensity}
          rest={exercise.rest}
        />
      );
    });
  }


  return (
    <div className="workout__container">
    <PageHeader/>
    <div className="workout__body">
      <div className="workout__top">
        <div className="workout__top--head">
          <h1 className="workout__title">
            {workoutDetails.title}
          </h1>
        </div>
        <div className="workout__top--foot">
          <p className="workout__top--text">
            {workoutDetails.description}
          </p>
        </div>
      </div>
      {exercises}
      <div className="button__container">
      <Link to='/dashboard' className="cancel__button"><p className="start-button__text">Cancel</p></Link>
      <Link to='/dashboard' className="save__button"><p className="start-button__text">Save</p></Link>
      </div>
    </div>
  </div>
  )
}

export default WorkoutPage