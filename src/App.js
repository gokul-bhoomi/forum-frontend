import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import home from './components/pages/Home';
import DF from './components/pages/DiscussionForum';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import forum from './components/pages/Forum';
import Alert from './components/layouts/Alerts';
import Post from './components/pages/Post';

import DiscussState from './context/discuss/DiscussState';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';

import './App.css';

function App() {
  return (
    <DiscussState>
      <AlertState>
        <AuthState>
          <Router>
            <div className='App'>
              <Navbar />
              <Alert />
              <Switch>
                <Route exact path='/' component={home} />
                <Route exact path='/list' component={forum} />
                <Route exact path='/discussforum/:id' component={DF} />
                <Route exact path='/post' component={Post} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Router>
        </AuthState>
      </AlertState>
    </DiscussState>
  );
}

export default App;
