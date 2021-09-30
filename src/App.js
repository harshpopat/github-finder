import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  // below all the user stuff is added into a container class (ps what is not part of navbr is added to container)

  // a lifecycle method, we will make an http req and fetch data from g8ithub as soon as the component mounts

  //axios deals with promises thats why .then, we will refactor it to async and await

  //Search github users, this is not the effective way to perform search as we have passed props up instead of down, its called props drilling, but we will refactor it using redux, context api and make the code more efficient

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
