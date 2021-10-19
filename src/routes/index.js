import { Switch, Route } from "react-router";
import Habits from "../pages/Habits";
import Dashboard from "../pages/Dashboard";

function Routes() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/signUp"></Route>
      <Route path="/login"></Route>
      <Route path="/habits">
        <Habits />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/groups"></Route>
    </Switch>
  );
}

export default Routes;
