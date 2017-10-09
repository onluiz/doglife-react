import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, DatePicker } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'

class DogForm extends Component {
    render() {
        return (
            <form onSubmit={ this.props.handleSubmit }>
                <div>
                    <Field
                        name="name" 
                        label="Dog Name"
                        floatingLabelText="Dog Name"
                        hintText="Your Dog's name"
                        component={TextField}
                        type="text"
                        required={false}
                        value=""/>
                </div>
                <div>
                    <Field
                        name="nickname" 
                        label="Dog Nickname"
                        floatingLabelText="Dog Nickname"
                        hintText="Your Dog's nickname"
                        component={TextField}
                        type="text"/>
                </div>
                <div>
                    <Field
                        name="birthdate"
                        component={DatePicker}
                        hintText="Your Dog's birthdate"
                        format={(value, name) => value === '' ? null : value}/>
                </div>
                <div>
                    <Field
                        name="notes" 
                        label="Dog Notes"
                        floatingLabelText="Dog Notes"
                        hintText="Notes about your dog"
                        component={TextField}
                        type="text"/>
                </div>
                <RaisedButton label="Save" primary={true} type="submit"/>
                <RaisedButton label="Cancel" onClick={ this.props.onCancel }/>
            </form>
        );
    }
}

export default reduxForm({form: 'dogForm'})(DogForm)