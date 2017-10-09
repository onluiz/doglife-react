import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MainPublicPage from './components/mainPublicPage/MainPublicPage'
import MainPage from './components/mainPage/MainPage'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'

class App extends Component {
  render() {

    let page;

    if(this.props.isAuthenticated) {
      page = <MainPage />
    } else {
      page = <MainPublicPage />
    }

    return (
      <MuiThemeProvider>
        <div className="App">
          {page}
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
    snackBar: state.dashboard.snackBar,
    isAuthenticated: state.app.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(App);