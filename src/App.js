import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'typeface-roboto';
// import { Switch, Route, withRouter } from 'react-router-dom';
import Router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';

// import Header from './components/header';
// import Footer from './components/footer';
// import Home from './pages/home';
// import NoMatch from './pages/NoMatch';
// import Header from './pages/Header';
import Debayansen from  './assets/debayansen';

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
