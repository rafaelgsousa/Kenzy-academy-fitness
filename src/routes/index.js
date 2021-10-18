import { Switch, Route } from "react-router";
import ModalGroup from "../pages/ModalGroup";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <ModalGroup />
      </Route>
      <Route path="/signUp"></Route>
      <Route path="/login"></Route>
      <Route path="/dashboard"></Route>
      <Route path="/habits"></Route>
      <Route path="/groups"></Route>
    </Switch>
  )
}

export default Routes;
