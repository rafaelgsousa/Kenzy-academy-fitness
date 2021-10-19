import { Switch, Route } from "react-router";

function Routes() {
  return (
    <Switch>
      <Route path="/signUp"></Route>
      <Route path="/login"></Route>
      <Route path="/dashboard"></Route>
      <Route path="/habits"></Route>
      <Route exact path="/"></Route>
    </Switch>
  )
}

export default Routes;
