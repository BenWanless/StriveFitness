import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./WorkoutCard.scss";

class WorkoutCard extends Component {
  render() {
    let list = [];

    if (this.props.sets > 1) {
      for (let index = 0; index < this.props.sets - 1; index++) {
        list.push(
          <div>
            <div className="sub-card__rest">
              <p className="sub-card__text"><span>{this.props.rest} rest</span></p>
            </div>
            <div className="sub-card">
              <h2 className="sub-card__title">{this.props.name}</h2>
              <div className="sub-card--right">
              <p className="sub-card__title">{this.props.reps}</p>
              <input className="sub-card__input" type="number" maxLength="3"></input>
              </div>
            </div>
          </div>
        );
      }
    }
    return (
      <div className="exercise">
        <div className="exercise__header">
          <h2 className="exercise__name">Focus exercise</h2>
          <div className="exercise__header--left">
            <p className="exercise__text">{this.props.intensity}</p>
            <p className="exercise__text">{this.props.sets} sets</p>
          </div>
        </div>
        <div className="exercise__content">
          <h2 className="exercise__name exercise__name--blue">
            {this.props.name}
          </h2>
          <div className="sub-card--right">
          <p className="exercise__text exercise__text--blue">
            {this.props.reps}
          </p>
          <input className="sub-card__input" type="number" maxLength="3"></input>
          </div>
        </div>
        {list}
      </div>
    );
  }
}

export default WorkoutCard;