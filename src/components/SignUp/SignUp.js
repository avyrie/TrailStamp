import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

class SignUp extends Component {
    state = {
      username: '',
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
        axios.post(`${process.env.REACT_APP_API}/auth/signup`, this.state)
          .then((res) => {
            console.log(res);
            this.props.history.push('/login');
          })
          .catch((err) => {
            console.log(err.response.status);
            console.log(err.response.data);
            console.log(err.response.data.message);
          });
      }
  
    render() {
      return (
        <div className="signup-div">
            <div className="signup-form">
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className="form-group">
                        <label className="images" htmlFor="image">Profile Image: </label>
                        <input onChange={this.handleChange} type="string" id="image" name="image" value={this.state.password} />
                    </div>
                    <div className="form-group">
                        <label className="username" htmlFor="username">Username: </label>
                        <input onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username} />
                    </div>
                    <div className="form-group">
                        <label className="emails" htmlFor="name">Email: </label>
                        <input onChange={this.handleChange} type="email" id="email" name="email" value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label className="passwords" htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
                    </div>
                    <div className="form-group">
                        <label className="names" htmlFor="name">Name: </label>
                        <input onChange={this.handleChange} type="text" id="name" name="name" value={this.state.name} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
      )
    }
  };

  export default withRouter(SignUp);