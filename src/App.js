import React, { Component } from 'react';
import Navbar from "./components/layout/Navbar"
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';


class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }

// below all the user stuff is added into a container class (ps what is not part of navbr is added to container)

// a lifecycle method, we will make an http req and fetch data from g8ithub as soon as the component mounts

//axios deals with promises thats why .then, we will refactor it to async and await

  // async componentDidMount() {
  //   this.setState({ loading: true })

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ loading: false, users: res.data })
  // }

  //Search github users, this is not the effective way to perform search as we have passed props up instead of down, its called props drilling, but we will refactor it using redux, context api and make the code more efficient
  
  searchUsers = async text => {

    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false  })
  }

  // Clear users from state
  clearUsers = () => {this.setState({ users: [], loading: false })}

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: {msg: msg, type: type} })  
    
    //here both are equal lhs and rhs so we can also write it as alert{msg, type}

    setTimeout(() => this.setState({ alert: null }), 5000);
  }


  render() {
    const { users, loading } = this.state

    return (
      <div>
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers}
          showClear={users.length ? true : false} 
          setAlert={this.setAlert}
          />
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }

}

export default App;
