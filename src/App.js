import React, { Component, useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);

  // below all the user stuff is added into a container class (ps what is not part of navbr is added to container)

  // a lifecycle method, we will make an http req and fetch data from g8ithub as soon as the component mounts

  //axios deals with promises thats why .then, we will refactor it to async and await

  // async componentDidMount() {
  //   this.setState({ loading: true })

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ loading: false, users: res.data })
  // }

  //Search github users, this is not the effective way to perform search as we have passed props up instead of down, its called props drilling, but we will refactor it using redux, context api and make the code more efficient

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    //here both are equal lhs and rhs so we can also write it as alert{msg, type}

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
