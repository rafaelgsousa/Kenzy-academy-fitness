import { Switch, Route } from "react-router";
import Habits from "../pages/Habits";

function Routes() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/signUp"></Route>
      <Route path="/login"></Route>
      <Route path="/dashboard"></Route>
      <Route path="/habits">
        <Habits />
      </Route>
      <Route path="/groups"></Route>
    </Switch>
  );
}

export default Routes;
