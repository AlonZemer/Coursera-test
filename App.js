import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> <Main /> </div>
      </Router>
    );
  }
}


