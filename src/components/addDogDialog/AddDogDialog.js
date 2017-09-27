import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import { connect } from 'react-redux'
import * as actions from '../../actions/dashboard'

class AddDogDialog extends Component {

    handleAddDogDialog = (event) => {
        this.props.manageAddDogDialog(!this.props.addDogDialog.open);
        event.preventDefault();
    }

    handleSubmit = (event) => {
        let newDog = this.state;
        this.props.addDog(newDog);
        event.preventDefault()
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        //TODO make this work like this.setState({[name]: value}) does
        // this.props.manageDog();
    }

    render() {
        return (
            <div>
                <Dialog
                    title="Add New Dog"
                    modal={true}
                    open={this.props.addDogDialog.open}
                >
                    
                <Form>
                    <Input name="name" label="Name" hint="Dog Name" value={ this.props.dog.name } required={true} onChange={this.handleInputChange}/>
                    <Input name="nickname" label="Nickname" hint="Dog Nickname" value={ this.props.dog.nickname } onChange={this.handleInputChange}/>
                    <Textarea name="notes" label="Notes"hint="Notes about your dog =)" value={ this.props.dog.notes } onChange={this.handleInputChange}/>
                    <Button variant="raised" color="primary" onClick={this.handleSubmit}>Save</Button>
                    <Button variant="raised" onClick={this.handleAddDogDialog}>Cancel</Button>
                </Form>

                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        addDogDialog: state.dashboard.addDogDialog,
        dog: state.dashboard.addDogDialog.dog
    }
}

export default connect(mapStateToProps, actions)(AddDogDialog);