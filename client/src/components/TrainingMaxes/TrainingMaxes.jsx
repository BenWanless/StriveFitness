import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditModal from "../../modals/EditModal";
import TrainingMaxesCard from "../TrainingMaxesCard/TrainingMaxesCard";
import "./TrainingMaxes.scss";

class TrainingMaxes extends Component {
  state = {
    trainingMaxList: [],
  };

  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/trainingmaxes").then((res) => {
      const trainingMaxList = res.data;
      this.setState({ trainingMaxList });
    });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    let trainingMaxList = this.state.trainingMaxList;
    let trainingmaxes = "";

    if (trainingMaxList != null) {
      trainingmaxes = trainingMaxList.map((trainingmax) => {
        return (
          <TrainingMaxesCard
            exercise={trainingmax.exercise}
            max={trainingmax.weight}
            key={trainingmax.id}
          />
        );
      });
    }

    return (
      <div className="training-maxes__container">
        <div className="training-maxes__wrapper">
          <h2 className="training-maxes__title">Current training maxes</h2>
          <p
            className="training-maxes__info training-maxes__info--underline"
            onClick={this.showModal}
          >
            Edit
          </p>
          <EditModal show={this.state.show} handleClose={this.hideModal}>
            <p>Modal</p>
          </EditModal>
        </div>
        <div className="exercise__wrapper">{trainingmaxes}</div>
      </div>
    );
  }
}

export default TrainingMaxes;
