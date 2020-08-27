import React, { Component } from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Routes from './config/routes'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import setAuth from './utils/setAuth';
import './App.css';

class App extends Component {
  state = {
    currentUser: '',
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(token);
      // Decode Token
      const decodedToken = jwt_decode(token);
      // Set State
      this.setState({
        currentUser: decodedToken.id
      })
    }
  }

  setCurrentUser = (token) => {
    // Store Token
    localStorage.setItem('token', token)
    // Set Auth Header
    setAuth(token);
    // Decode Token
    const decodedToken = jwt_decode(token);
    // Set State
    this.setState({
      currentUser: decodedToken
    })
  };

  logout = () => {
    // Remove Token
    localStorage.removeItem('token');
    // Remove Auth Header
    setAuth();
    // Set State
    this.setState({currentUser: ''});
    // Redirect
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        <Nav currentUser={this.state.currentUser} logout={this.logout}/>
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
