import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORTS
import NavBar from './components/navbar/NavBar';
import LandingPage from "./components/landingpage/LandingPage";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={LandingPage}>
            <LandingPage />
          </Route>
          <Route path="/message" component={Message}>
            <Message />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/aboutus" component={AboutUs}>
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Message() {
  return <h2>Message</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function AboutUs() {
  return <h2>AboutUs</h2>;
}