import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/logos/logo-horizontal.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import WorkoutOverviewCard from "../WorkoutOverviewCard/WorkoutOverviewCard";
import "./WorkoutOverview.scss";

class WorkoutOverview extends Component {
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
        <header className="overview__header">
          <div className="overview__header--right">
            <Link to="/dashboard">
              <img src={BackArrow} alt="back arrow" />
            </Link>
            <p className="overview__header--text">Dashboard</p>
          </div>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <Link className="overview__header--text" to="/">
              Logout
            </Link>
          </div>
        </header>
        <div className="overview__body">
          <div className="overview__top">
            <div className="overview__top--head">
              <h1 className="overview__title">
                {this.state.workoutDetails.title}
              </h1>
              <Link to={`/workout/${this.state.workoutDetails.id}`} className="start-button"><p className="start-button__text">Start</p></Link>
            </div>
            <div className="overview__top--foot">
              <p className="overview__top--text overview__top--text--small">
                Description
              </p>
              <p className="overview__top--text">
                {this.state.workoutDetails.description}
              </p>
            </div>
          </div>
          {exercises}
        </div>
      </div>
    );
  }
}

export default WorkoutOverview;
