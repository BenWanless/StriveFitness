import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
import WorkoutDashboard from "./components/WorkoutDashboard";
import WorkoutOverview from "./components/WorkoutOverview";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page__wrapper">
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={WorkoutDashboard}/>
          <Route path="/overview/:workoutId" exact component={WorkoutOverview}/>
        </div>
      </Router>
    );
  }
}

export default App;
