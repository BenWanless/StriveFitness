import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/logo-horizontal.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import "./WorkoutOverview.scss";

class WorkoutOverview extends Component {
  render() {
    return (
      <div className="overview__container">
        <header className="overview__header">
          <div className="overview__header--right">
            <img src={BackArrow} alt="back arrow" />
            <p className="overview__header--text">Dashboard</p>
          </div>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <p className="overview__header--text">Logout</p>
          </div>
        </header>
        <div className="overview__body">
          <div className="overview__top">
            <h1 className="overview__title">Full Body: Day 1</h1>
            <button>Start</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutOverview;
