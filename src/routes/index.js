import { Switch, Route } from "react-router";
import Habits from "../pages/Habits";
import Dashboard from "../pages/Dashboard";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import { Groups } from "../pages/Groups";
import {ModalGroups} from "../pages/modalGroups"
import QuemSomosPage from "../pages/QuemSomosPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/quemSomos" component={QuemSomosPage}/>
      <Route path="/signUp" component={Cadastro}/>
      <Route path="/login" component={Login}/>
      <Route path="/habits" component={Habits}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/groups" component={Groups}/>
      <Route path="/modalgroups/:id" component={ModalGroups}/>
    </Switch>
  );
}

export default Routes;

