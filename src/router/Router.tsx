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
import { Page404 } from '../components/404';

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

       <Route path="*">
          <Page404 />
      </Route>

    </Switch>
  );
}
