import React, { Component } from 'react';
import Navbar from "./components/layout/Navbar"
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';


class App extends Component {

  state = {
    users: [],
    loading: false
  }

// below all the user stuff is added into a container class (ps what is not part of navbr is added to container)

// a lifecycle method, we will make an http req and fetch data from g8ithub as soon as the component mounts

//axios deals with promises thats why .then, we will refactor it to async and await

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await axios.get('https://api.github.com/users');

    this.setState({ loading: false, users: res.data })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">   
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }

}

export default App;
