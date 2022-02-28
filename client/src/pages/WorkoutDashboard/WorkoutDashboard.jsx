import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import WorkoutDashboardCard from "../../components/WorkoutDashboardCard/WorkoutDashboardCard";
import TrainingMaxes from "../../components/TrainingMaxes/TrainingMaxes";
import PageHeader from "../../components/PageHeader/PageHeader";
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
    const token = sessionStorage.getItem("authorization").split(" ")[1];
    const decodedUser = jwt_decode(token);

    if (workoutList != null) {
      workouts = workoutList.map((workout) => {
        return (
          <Link
            className="workout-dashboard__link"
            to={`/overview/${workout.id}`}
          >
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
        <PageHeader />
        <div className="workout__wrapper">
          <h1 className="workout__name">
            {`${decodedUser.firstName}'s`} workouts
          </h1>
          <div className="workout-card__wrapper">{workouts}</div>
          <TrainingMaxes />
        </div>
      </div>
    );
  }
}

export default WorkoutDashboard;
