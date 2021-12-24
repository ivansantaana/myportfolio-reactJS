import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfoliio';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
