import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from '../mainPage/MainPage'

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/main-page' component={ MainPage }/>
                </Switch>
            </main>
        )
    }
}
export default Routes