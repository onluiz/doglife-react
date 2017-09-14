import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header'
import VisibleDogCardList from './containers/visibleDogCardList/VisibleDogCardList'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <VisibleDogCardList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
