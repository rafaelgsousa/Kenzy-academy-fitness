import { Switch, Route } from "react-router";
import {Groups} from "../pages/Groups/index";

function Routes() {
  return (
    <Switch>
      <Route path="/signUp"></Route>
      <Route path="/login"></Route>
      <Route path="/dashboard"></Route>
      <Route path="/habits"></Route>
      <Route exact path="/"><Groups/></Route>
    </Switch>
  )
}

export default Routes;
