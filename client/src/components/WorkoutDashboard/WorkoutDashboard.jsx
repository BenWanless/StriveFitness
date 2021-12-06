import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/logos/logo-horizontal.svg";
import WorkoutDashboardCard from "../WorkoutDashboardCard/WorkoutDashboardCard";
import TrainingMaxes from "../TrainingMaxes/TrainingMaxes";
import "./WorkoutDashboard.scss";

class WorkoutDashboard extends Component {
  state = {
    workoutList: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/workouts").then((res) => {
      const workoutList = res.data;
      this.setState({ workoutList });
    });
  }

  render() {
    let workoutList = this.state.workoutList;
    let workouts = "";

    if (workoutList != null) {
      workouts = workoutList.map((workout) => {
        return (
          <Link to={`/overview/${workout.id}`}>
            <WorkoutDashboardCard
              title={workout.title}
              description={workout.description}
              key={workout.id}
            />
          </Link>
        );
      });
    }
    return (
      <div className="dashboard__container">
        <header className="dashboard__header">
          <div></div>
          <img src={Logo} alt="logo" />
          <Link classname="dashboard__link" to="/">
            Logout
          </Link>
        </header>
        <div className="workout__wrapper">
          <h1 className="workout__title">Ben's workouts</h1>
          <div className="workout__card--wrapper">{workouts}</div>
          <TrainingMaxes />
        </div>
      </div>
    );
  }
}

export default WorkoutDashboard;
