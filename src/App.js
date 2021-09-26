import React, { Component } from 'react';
import Navbar from "./components/layout/Navbar"
import Users from './components/users/Users';
import './App.css';


class App extends Component {

// below all the user stuff is added into a container class (ps what is not part of navbr is added to container)

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">   
          <Users />
        </div>
      </div>
    );
  }

}

export default App;
