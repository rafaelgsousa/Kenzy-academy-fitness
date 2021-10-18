import { Switch, Route } from "react-router";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";

function Routes() {

  return(
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/signUp">
        <Cadastro />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
    <Route path="/dashboard"></Route>
    <Route path="/habits"></Route>
    <Route path="/groups"></Route>
  </Switch>

  ) 
}

export default Routes;
