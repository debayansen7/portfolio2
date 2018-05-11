import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'typeface-roboto';
// import { Switch, Route, withRouter } from 'react-router-dom';
import Router from './router';

import 'bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Router/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
