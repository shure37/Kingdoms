import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Layout from "./components/Layout";
import Gallery from "./components/Gallery";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const app = document.getElementById("app");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Gallery}/>
      <Route path="signin" component={Signin}/>
      <Route path="signup" component={Signup}/>
    </Route>
  </Router>,
app);
