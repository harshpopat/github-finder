import React, { Component } from 'react'

class UserItem extends Component {
  // constructor() {
  //   super();

  //   this.
      state = {   //we can do this without using constructor in this way
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    //}
  }// here we have hardcoded our data from api.github.com/users, futher we will directly fetch data


  render() {
    const {avatar_url, login, html_url} = this.state  // destructuring
    return (
      <div className="card text-center">
        <img src={avatar_url}  // because of destructuring here we do not need to use this.state
        alt=""
        className="round-img" 
        style={{ width: '60px' }}
        />
        <h3>{login}</h3>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>

    )
  }
}

export default UserItem
