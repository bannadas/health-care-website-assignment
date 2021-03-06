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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DoctorDetails from "./pages/DoctorDetails/DoctorDetails";
import Service from "./pages/Service/Service";
import Error from "./pages/Error/Error";


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
         
          <PrivateRoute path="/service/:serviceId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/doctordetails">
            < DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*"> 
            <Error></Error>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
