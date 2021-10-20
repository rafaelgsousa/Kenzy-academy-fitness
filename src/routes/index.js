import { Switch, Route } from "react-router";
import Habits from "../pages/Habits";
import Dashboard from "../pages/Dashboard";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import { Groups } from "../pages/Groups";

function Routes() {
  return (
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
      <Route path="/habits">
        <Habits />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/groups">
        <Groups/>
      </Route>
    </Switch>
  );
}

export default Routes;
