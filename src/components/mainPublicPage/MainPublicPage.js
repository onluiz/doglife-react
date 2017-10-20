import React, { Component } from 'react'
import './MainPublicPage.css'
import {Tabs, Tab} from 'material-ui/Tabs'
import SignUpFormContainer from '../../containers/signUpForm/SignUpFormContainer'
import {Card, CardTitle, CardText} from 'material-ui/Card'

class MainPublicPage extends Component {
    render() {
        return (
            <div>
                <Card className="card">
                    <CardTitle title="Doglife"/>
                    <CardText>
                        <Tabs>
                            <Tab label="Sign In">
                                <div className="tab">
                                    <p>
                                    You can put any sort of HTML or react component in here. It even keeps the component state!
                                    </p>
                                </div>
                            </Tab>
                            <Tab label="Sign Up" >
                                <div className="tab">
                                    <SignUpFormContainer />
                                </div>
                            </Tab>
                        </Tabs>
                    </CardText>
                </Card>
            </div>
        )
    }
}
export default MainPublicPage;