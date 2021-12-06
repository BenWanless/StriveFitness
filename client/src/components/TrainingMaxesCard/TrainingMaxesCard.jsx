import React, { Component } from "react";
import "./TrainingMaxesCard.scss"

class TrainingMaxesCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="exercise__container">
        <div className="wenis">
          <h3 className="exercise__title">{this.props.exercise}</h3>
          <p className="exercise__weight">
            {this.props.max}
            <span className="exercise__units">lbs</span>
          </p>
        </div>
      </div>
    );
  }
}

export default TrainingMaxesCard;
