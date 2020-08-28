import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/auth/login`, this.state)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.id)

        this.props.setCurrentUser(res.data.token);
        this.props.history.push('/hikes');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.props);
    return (
        <div className="login-div">
          <div className="login-form">
            <form onSubmit={this.handleSubmit}>
              <h2>Login</h2>
              <div className="form-group">
                <label className="email" htmlFor="name">E-mail: </label>
                <input onChange={this.handleChange} type="email" id="email" name="email" value={this.state.email} placeholder="Enter your e-mail" required/>
              </div>
              <div className="form-group">
                <label className="password" htmlFor="password">Password: </label>
                <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} placeholder="Enter your password" required/>
              </div>
              <button className="btn btn-primary" type="submit">Login</button>
            </form>
          </div>
        </div>
    )
  }
};

export default withRouter(Login);
