import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'  

// we use {} to import because it is not the default export, it exports a bunch of stuff, if default then directly import without braces

const Navbar = ({icon, title}) => {

  //here we directly destructured as we have the props individually passed not into a single object

  
  // proptypes basically says the types of props which are allowed to pass, here string, if any other type is passed it will execute but will throw an error in the console, also isrequired is mentioned, if title is removed from default prop then it'll throw an error on the console. It is not necessary to write prop types in the app but it is good to make the app robust.

  // in the links we could use <a> tag but it clears the previos state, hence we use Link from react-router-dom
  
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className = {icon} /> {title}
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    )
  
}


Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};  

//default props values, we can override these when we pass props through components in app.js

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar