import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/logos/logo-horizontal.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import WorkoutCard from "../WorkoutCard/WorkoutCard";
import "./Workout.scss";

class Workout extends Component {
  state = {
    workoutDetails: [],
  };

  componentDidMount() {
    const workoutId = this.props.match.params.workoutId;
    axios.get(`http://localhost:8080/workouts/${workoutId}`).then((res) => {
      this.setState({
        workoutDetails: res.data,
      });
    });
  }

  render() {
    console.log(this.state.workoutDetails);
    let exerciseList = this.state.workoutDetails.exercises;
    let exercises = "";

    if (exerciseList != null) {
      exercises = exerciseList.map((exercise) => {
        // console.log(exercise)
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
        <header className="workout__header">
          <div className="workout__header--right">
            <Link to="/dashboard">
              <img src={BackArrow} alt="back arrow" />
            </Link>
            <p className="workout__header--text">Dashboard</p>
          </div>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <Link className="workout__header--text" to="/">
              Logout
            </Link>
          </div>
        </header>
        <div className="workout__body">
          <div className="workout__top">
            <div className="workout__top--head">
              <h1 className="workout__title">
                {this.state.workoutDetails.title}
              </h1>
            </div>
            <div className="workout__top--foot">
              <p className="workout__top--text workout__top--text--small">
                Description
              </p>
              <p className="workout__top--text">
                {this.state.workoutDetails.description}
              </p>
            </div>
          </div>
          {exercises}
          <div className="button__container">
          <Link className="cancel__button"><p className="start-button__text">Cancel</p></Link>
          <Link className="save__button"><p className="start-button__text">Save</p></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Workout;