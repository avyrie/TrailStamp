import React, { Component } from 'react';

class SignUp extends Component {
    state = {
      username: '',
      email: '',
      password: '',
    };
  
    render() {
      return (
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={this.state.username} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input type="email" id="email" name="email" value={this.state.email} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={this.state.password} />
          </div>
          <button className="btn btn-primary float-right" type="submit">Submit</button>
        </form>
      )
    }
  };

  export default (SignUp);