import React, { Component } from 'react';
import Header from './components/header/Header'
import DogCardList from './components/dogCardList/DogCardList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DogCardList />
      </div>
    );
  }
}

export default App;
