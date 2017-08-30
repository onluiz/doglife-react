import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import './App.css'

const App = () => (
  <MuiThemeProvider>
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  </MuiThemeProvider>
);

export default App;
