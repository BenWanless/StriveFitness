import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logo-horizontal.svg";
import WorkoutDashboardCard from "../WorkoutDashboardCard/WorkoutDashboardCard";
import TrainingMaxes from "../TrainingMaxes/TrainingMaxes";
import "./WorkoutDashboard.scss";

class WorkoutDashboard extends Component {
  render() {
    return (
      <div className="dashboard__container">
        <header className="dashboard__header">
          <div>
          </div>
            <img src={Logo} alt="logo" />
            <Link classname="dashboard__link" to="/">
              Logout
            </Link>
        </header>
        <div className="workout__wrapper">
          <h1 className="workout__title">Ben's workouts</h1>
          <div className="workout__card--wrapper">
            <WorkoutDashboardCard />
          </div>
          <TrainingMaxes/>
        </div>
      </div>
    );
  }
}

export default WorkoutDashboard;
