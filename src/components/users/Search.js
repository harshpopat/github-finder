import React, { Component } from 'react'

class Search extends Component {
  //whenever we have form in react normally we are going to attach state to the input
  state = {
    text: ''
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
  //here we do not hardcode the name of the i/p so this single onchange can work for multiple input names 

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form"> 
          <input
            type="text" 
            name="text" 
            placeholder="Search Users..." 
            value={this.state.text}
            onChange={this.onChange}
          />
          <input 
            type="submit" 
            value="Search" 
            className="btn btn-dark btn-block"
          />
        </form>        
      </div>
    )
  }
}

export default Search
