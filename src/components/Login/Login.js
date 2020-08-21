import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    // console.log(this.props);
    return (
      <div className="login-form">
        <form>
          <h2>Login</h2>
          <div className="form-group">
            <label className="email" htmlFor="name">Email: </label>
            <input type="email" id="email" name="email" value={this.state.email} />
          </div>
          <div className="form-group">
            <label className="password" htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" value={this.state.password} />
          </div>
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
      </div>
    )
  }
};

export default (Login);
