import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../header/Header';
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <div className="App">
      <Header></Header>
    </div>
  </MuiThemeProvider>
);

export default App;
