import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Beaver from '../images/animal.png'
import Fish from '../images/clownfish.png'
import Flower from '../images/flower.png'
import Fox from '../images/fox.png'
import Leaf from '../images/leaf.png'
import Lizard from '../images/lizard.png'
import Plant from '../images/plant.png'
import Snake from '../images/snake.png'
import Sun from '../images/sun.png'
import Tree from '../images/tree.png'

import './SignUp.css';

class SignUp extends Component {
    state = {
      image: '',
      username: '',
      email: '',
      password: '',
      name: '',
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
            console.log(`This is res in handle submit: `, res);
            this.props.setCurrentUser(res.data.token);
            this.props.history.push('/');
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

                        <select className="image-signup" name="image" onChange={this.handleChange}>
                          <option value=''>Select an avatar</option>
                          <option value={Beaver}>Beaver</option>
                          <option value={Flower}>Flower</option>
                          <option value={Fish}>Fish</option>
                          <option value={Fox}>Fox</option>
                          <option value={Leaf}>Leaf</option>
                          <option value={Lizard}>Lizard</option>
                          <option value={Plant}>Plant</option>
                          <option value={Snake}>Snake</option>
                          <option value={Sun}>Sun</option>
                          <option value={Tree}>Tree</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label className="username" htmlFor="username">Username: </label>
                        <input onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username} placeholder="Enter a username" required/>
                    </div>
                    <div className="form-group">
                        <label className="emails" htmlFor="name">Email: </label>
                        <input onChange={this.handleChange} type="email" id="email" name="email" value={this.state.email} placeholder="Enter your e-mail address" required/>
                    </div>
                    <div className="form-group">
                        <label className="passwords" htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} placeholder="Enter a password" required/>
                    </div>
                    <div className="form-group">
                        <label className="names" htmlFor="name">Name: </label>
                        <input onChange={this.handleChange} type="text" id="name" name="name" value={this.state.name} placeholder="Enter your name" required/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
      )
    }
  };

  export default withRouter(SignUp);