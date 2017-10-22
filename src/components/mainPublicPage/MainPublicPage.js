import React, { Component } from 'react'
import './MainPublicPage.css'
import {Tabs, Tab} from 'material-ui/Tabs'
import SignInFormContainer from '../../containers/signInForm/SignInFormContainer'
import SignUpFormContainer from '../../containers/signUpForm/SignUpFormContainer'
import {Card, CardTitle, CardText} from 'material-ui/Card'

import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

class MainPublicPage extends Component {
    render() {
        return (
            <Container fluid={true} className="container">
                <Row>
                    <Col md="4"></Col>
                    <Col md="4">
                        <Card>
                            <CardTitle title="Doglife"/>
                            <CardText>
                                <Tabs>
                                    <Tab label="Sign In">
                                        <SignInFormContainer />
                                    </Tab>
                                    <Tab label="Sign Up" >
                                        <SignUpFormContainer />
                                    </Tab>
                                </Tabs>
                            </CardText>
                        </Card>
                    </Col>
                    <Col md="4"></Col>
                </Row>
            </Container>
        )
    }
}
export default MainPublicPage;