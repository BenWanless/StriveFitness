import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader";
import WorkoutOverviewCard from "../../components/WorkoutOverviewCard/WorkoutOverviewCard";
import "./WorkoutOverviewPage.scss";

function WorkoutOverviewPage(props) {
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
        <WorkoutOverviewCard
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
    <div className="overview__container">
      <PageHeader />
      <div className="overview__body">
        <div className="overview__top">
          <div className="overview__top--head">
            <h1 className="overview__title">{workoutDetails.title}</h1>
            <Link to={`/workout/${workoutDetails.id}`} className="start-button">
              <p className="start-button__text">Start</p>
            </Link>
          </div>
          <div className="overview__top--foot">
            <p className="overview__top--text">{workoutDetails.description}</p>
          </div>
        </div>
        {exercises}
      </div>
    </div>
  );
}

export default WorkoutOverviewPage;
