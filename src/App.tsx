import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Signup } from './components/signup';
import { Login } from './components/login';
import { Home } from './components/Home';
import { Router } from './router/Router';
import { Page404 } from './components/404';

function App() {


  return (
<>
      <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to="/pages/login">ログイン画面</Link>
      <br />
      <Link to="/pages/signup">サインアップ</Link>
        <Router />
       

    </BrowserRouter>

</>
  );
}

export default App;
