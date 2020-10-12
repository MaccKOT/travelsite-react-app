import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
        <HeroSection />
      </Router>
    </>
  );
}

export default App;
