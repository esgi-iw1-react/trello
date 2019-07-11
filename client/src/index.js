import React from 'react';
import ReactDOM from 'react-dom';
import './output.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import CardProvider from "./context/CardProvider";
import PrivateRoute from "./components/Auth/PrivateRoute";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";


ReactDOM.render(
  <CardProvider>
    <Router>
      <PrivateRoute path="/" exact component={App}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/register" exact component={Register}/>
    </Router>
  </CardProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
