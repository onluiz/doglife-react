import React, { Component } from 'react'
import Header from '../header/Header'
import DogCardList from '../dogCardList/DogCardList'

/**
 * This react component must be accessible only when a valid token is provided to it
 * How it will work I stil don't knowing :P
 */
class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <DogCardList />
            </div>
        )
    }
}
  
export default MainPage;