import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";

import ServiceDetail from "./ServiceDetail/ServiceDetail";
import About from "./AboutUs/About";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AuthProvider from "./context/AuthProvider";


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service/:serviceId">
            <ServiceDetail></ServiceDetail>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
