import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Routes from './config/routes'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
