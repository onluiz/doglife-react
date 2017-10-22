import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import './SignInForm.css'

class SignInForm extends Component {
    render() {
        return (
            <form onSubmit={ this.props.handleSubmit }>
                <div>
                    <Field
                        name="username" 
                        label="Your Username"
                        floatingLabelText="Username"
                        hintText="Your Username"
                        component={TextField}
                        type="text"
                        required={true}/>
                </div>
                <div>
                    <Field
                        name="password" 
                        label="Your Password"
                        floatingLabelText="Password"
                        hintText="Your Password"
                        component={TextField}
                        type="password"
                        required={true}/>
                </div>
                <RaisedButton label="Sign In" primary={true} type="submit"/>
            </form>
        )
    }
}
export default reduxForm({form: 'signInForm'})(SignInForm)