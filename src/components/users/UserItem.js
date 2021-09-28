import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//as user is a prop passed here so we need to use prop type, use impt shortcut

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  //destructuring the props here itself, we are fetching data from user prop which is passed

  // here we have hardcoded our data from api.github.com/users, futher we will directly fetch data

  // destructuring, instead of state we are using props which we passed and we passed it into user, therefore this.props.user.anything

  return (
    <div className='card text-center'>
      <img
        src={avatar_url} // because of destructuring here we do not need  to use this.state
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  //here user (prop which is passed) is an object so
  //use ptor shortcut for rhs
  user: PropTypes.object.isRequired,
};

export default UserItem;
