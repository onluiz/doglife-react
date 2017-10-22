import React, { Component } from 'react'
import SignInForm from '../../components/signInForm/SignInForm'
import { connect } from 'react-redux'
import * as actions from '../../actions/mainPublicPage'

class SignInFormContainer extends Component {
    handleSubmit = (values) => {
        this.props.authUser(values);
    }

    render() {
        return (
                <SignInForm onSubmit={ this.handleSubmit }></SignInForm>
        )
    }
}
export default connect(null, actions)(SignInFormContainer);
