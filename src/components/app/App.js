import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from '../menu/Menu';
import './App.css';

const App = () => (
  <MuiThemeProvider>
    <div className="App">
      <Menu></Menu>
    </div>
  </MuiThemeProvider>
);

export default App;
