import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Users from './Users';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  //whenever we have form in react normally we are going to attach state to the input
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  //here we do not hardcode the name of the i/p so this single onchange can work for multiple input names

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
