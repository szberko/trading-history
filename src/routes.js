import { Route, HashRouter, Switch } from 'react-router-dom'
import Main from "./Main";
import React from "react";

export default props => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={ Main }/>
    </Switch>
  </HashRouter>
)