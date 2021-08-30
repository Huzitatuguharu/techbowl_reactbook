import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Signup } from '../components/signup';
import { Login } from '../components/login';
import { Home } from '../components/Home';

export const Router = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/pages/login">
        <Login />
      </Route>

      <Route path="/pages/signup">
        <Signup />
      </Route>

    </Switch>
  );
}
