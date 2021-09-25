import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {

  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };  //default props values, we can override these when we pass props through components in app.js

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  
//proptypes basically says the types of props which are allowed to pass, here string, if any other type is passed it will execute but will throw an error in the console, also isrequired is mentioned, if title is removed from default prop then it'll throw an error on the console. It is not necessary to write prop types in the app but it is good to make the app robust.

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className = {this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar
