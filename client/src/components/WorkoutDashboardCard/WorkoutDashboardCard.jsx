import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightChevron from "../../assets/icons/right-chevron.svg";
import "./WorkoutDashboardCard.scss";

class WorkoutDashboardCard extends Component {
  
  render() {
    console.log(this.props);
      return(
      <div className="workout__card">
      <div className="workout__card--content">
        <h2 className="workout__card--title">{this.props.title}</h2>
        <p className="workout__card--info">Focus: {this.props.description}</p>
      </div>
      <img src={RightChevron} alt="right chevron" />
    </div>
          )
  }
}

export default WorkoutDashboardCard;
