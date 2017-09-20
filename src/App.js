import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './components/header/Header'
import VisibleDogCardList from './containers/visibleDogCardList/VisibleDogCardList'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <VisibleDogCardList />
          <Snackbar
            open={this.props.snackBar.open}
            message={this.props.snackBar.message}
            autoHideDuration={4000}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return { 
    snackBar: state.dashboard.snackBar
  }
}
export default connect(mapStateToProps, null)(App);