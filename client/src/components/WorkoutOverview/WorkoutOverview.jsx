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
        return <WorkoutOverviewCard nob={exercise.name} />;
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
            <h1 className="overview__title">
              {this.state.workoutDetails.title}
            </h1>
            <button>Start</button>
            <p>Description</p>
            <p>{this.state.workoutDetails.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutOverview;
