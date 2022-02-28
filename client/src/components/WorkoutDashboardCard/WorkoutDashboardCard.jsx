import React from "react";
import RightChevron from "../../assets/icons/right-chevron.svg";
import "./WorkoutDashboardCard.scss";


function WorkoutDashboardCard({description, title}) {
  return(
    <div className="workout-card">
    <div className="workout-card__content">
      <h2 className="workout-card__title">{title}</h2>
      <p className="workout-card__info">{description}</p>
    </div>
    <img src={RightChevron} alt="right chevron" />
  </div>
        )
}

export default WorkoutDashboardCard
