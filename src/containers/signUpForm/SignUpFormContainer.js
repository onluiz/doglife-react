import React, { Component } from 'react'
import SignUpForm from '../../components/signUpForm/SignUpForm'

class SignUpFormContainer extends Component {

    handleSubmit = (values) => {

        console.log(values);

        // if(values._id === "") {
        //     this.props.addDog(values);
        // } else {
        //     this.props.updateDog(values);
        // }
    }

    render() {
        return (
            <div>
                <SignUpForm onSubmit={ this.handleSubmit }/>
            </div>
        )
    }
}
export default SignUpFormContainer;