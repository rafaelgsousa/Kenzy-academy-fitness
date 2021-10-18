import { Switch, Route } from "react-router";

function Routes() {
  <Switch>
    <Route exact path="/"></Route>
    <Route path="/signUp"></Route>
    <Route path="/login"></Route>
    <Route path="/dashboard"></Route>
    <Route path="/habits"></Route>
    <Route path="/groups"></Route>
  </Switch>;
}

export default Routes;
