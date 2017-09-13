import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header'
import DogCardList from './components/dogCardList/DogCardList'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <DogCardList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
