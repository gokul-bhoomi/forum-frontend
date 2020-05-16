import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import home from './components/pages/Home';
import DiscussState from './context/discuss/DiscussState';

import './App.css';

function App() {
  return (
    <DiscussState>
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/' component={home} />
          </Switch>
        </div>
      </Router>
    </DiscussState>
  );
}

export default App;
