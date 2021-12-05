import React, { Component } from "react";
import { Link } from "react-router-dom";
import EditModal from "../../modals/EditModal";
import "./TrainingMaxes.scss";

class TrainingMaxes extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="training-maxes__container">
        <div className="training-maxes__wrapper">
          <h2 className="training-maxes__title">Current training maxes</h2>
          <p className="training-maxes__info training-maxes__info--underline" onClick={this.showModal}>Edit</p>
          <EditModal show={this.state.show} handleClose={this.hideModal}>
            <p>Modal</p>
          </EditModal>
        </div>
        <div className="exercise__wrapper">
          <div className="exercise__container">
            <div className="wenis">
              <h3 className="exercise__title">Squat</h3>
              <p className="exercise__weight">
                350<span className="exercise__units">lbs</span>
              </p>
            </div>
          </div>
          <div className="exercise__container">
            <div className="wenis">
              <h3 className="exercise__title">Bench</h3>
              <p className="exercise__weight">
                350<span className="exercise__units">lbs</span>
              </p>
            </div>
          </div>
          <div className="exercise__container">
            <div className="wenis">
              <h3 className="exercise__title">Deadlift</h3>
              <p className="exercise__weight">
                350<span className="exercise__units">lbs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainingMaxes;
