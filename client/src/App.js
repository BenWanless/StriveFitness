import { BrowserRouter as Router, Route } from "react-router-dom";
import WorkoutDashboard from "./pages/WorkoutDashboard";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import WorkoutOverviewPage from "./pages/WorkoutOverviewPage";
import WorkoutPage from "./pages/WorkoutPage";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import UnauthorizedAccessPage from "./pages/UnauthorizedAccessPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="page__wrapper">
        <Route exact path="/" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/unauthorized" component={UnauthorizedAccessPage}/>
        <RequireAuth
          component={WorkoutDashboard}
          path="/dashboard"
        />
        <RequireAuth
          component={WorkoutOverviewPage}
          path="/overview/:workoutId"
        />
        <RequireAuth
          component={WorkoutPage}
          path="/workout/:workoutId"
        />
      </div>
    </Router>
  );
}

export default App;
