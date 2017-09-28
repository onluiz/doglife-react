import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class DogForm extends Component {
    render() {
        return (
            <form onSubmit={ this.props.handleSubmit }>
                <div>
                    <label htmlFor="name">Dog Name</label>
                    <Field name="name" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="nickname">Dog Nickname</label>
                    <Field name="nickname" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="birthdate">Dog Birthdate</label>
                    <Field name="birthdate" component="input" type="date" />
                </div>
                <div>
                    <label htmlFor="notes">Notes about your dog</label>
                    <Field name="notes" component="input" type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default reduxForm({ form: 'dogForm' })(DogForm)