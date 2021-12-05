import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logo-horizontal.svg";
import WorkoutDashboardCard from "../WorkoutDashboardCard/WorkoutDashboardCard";
import TrainingMaxes from "../TrainingMaxes/TrainingMaxes";
import "./WorkoutDashboard.scss";

class WorkoutDashboard extends Component {
  render() {
    return (
      <div className="overview__container">
        <header className="overview__header">
          <div className="overview__header--right">
            <img src={Logo} alt="logo" />
          </div>
          <div className="overview__header--left">
            <Link classname="overview__link" to="/login">
              Logout
            </Link>
          </div>
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
