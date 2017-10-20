import React, { Component } from 'react'
import SignUpForm from '../../components/signUpForm/SignUpForm'
import { connect } from 'react-redux'
import * as actions from '../../actions/mainPublicPage'

class SignUpFormContainer extends Component {
    handleSubmit = (values) => {
        this.props.addUser(values);
    }

    render() {
        return (
            <div>
                <SignUpForm onSubmit={ this.handleSubmit }/>
            </div>
        )
    }
}
export default connect(null, actions)(SignUpFormContainer);