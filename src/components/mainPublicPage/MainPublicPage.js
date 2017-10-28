import React, { Component } from 'react'
import './MainPublicPage.css'
import {Tabs, Tab} from 'material-ui/Tabs'
import SignInFormContainer from '../../containers/signInForm/SignInFormContainer'
import SignUpFormContainer from '../../containers/signUpForm/SignUpFormContainer'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';
import * as actions from '../../actions/mainPublicPage';

class MainPublicPage extends Component {
    handleChange = (value) => {
        this.props.manageTabIndex(value);
    }

    render() {
        return (
            <Container fluid={true} className="container">
                <Row>
                    <Col md="4"></Col>
                    <Col md="4">
                        <Card>
                            <CardTitle title="Doglife"/>
                            <CardText>
                                <Tabs
                                    onChange={this.handleChange}
                                    value={this.props.tabIndex} >
                                        <Tab label="Sign In" value={0} />
                                        <Tab label="Sign Up" value={1} />
                                </Tabs>
                                <SwipeableViews
                                    index={this.props.tabIndex}
                                    onChangeIndex={this.handleChange}>
                                    <div>
                                        <SignInFormContainer />
                                    </div>
                                    <div>
                                        <SignUpFormContainer />
                                    </div>
                                </SwipeableViews>
                            </CardText>
                        </Card>
                    </Col>
                    <Col md="4"></Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return { 
        tabIndex: state.mainPublicPage.tabIndex
    }
}

export default connect(mapStateToProps, actions)(MainPublicPage);