import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import home from './components/pages/Home';
import post from './components/pages/Post';
import DiscussState from './context/discuss/DiscussState';
import UserState from './context/user/UserState';
import forum from './components/pages/Forum';

import './App.css';

function App() {
  return (
    <DiscussState>
      <UserState>
        <Router>
          <div className='App'>
            <Navbar />
            <Switch>
              <Route exact path='/' component={home} />
              <Route exact path='/list' component={forum} />
              <Route exact path='/post/:id' component={post} />
            </Switch>
          </div>
        </Router>
      </UserState>
    </DiscussState>
  );
}

export default App;
