import { Switch, Route } from "react-router";
import Group from "../pages/Group";

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Group /></Route>
      <Route path="/signUp"></Route>
      <Route path="/login"></Route>
      <Route path="/dashboard"></Route>
      <Route path="/habits"></Route>
      <Route path="/groups"></Route>
    </Switch>
  )
}

export default Routes;
