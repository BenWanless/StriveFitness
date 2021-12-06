import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WorkoutOverviewCard.scss";

class WorkoutOverviewCard extends Component {
  
  render() {
      return(
      <div className="">
          {this.props.name}
    </div>
          )
  }
}

export default WorkoutOverviewCard;