import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import { connect } from 'react-redux'
import * as actions from '../../actions/dashboard'

class AddDogDialog extends Component {
    handleSubmit = (event) => {
        let newDog = this.state;
        this.props.addDog(newDog);
        event.preventDefault()
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
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
                    <Input name="name" label="Name" hint="Dog Name" required={true} onChange={this.handleInputChange}/>
                    <Input name="nickname" label="Nickname" hint="Dog Nickname" onChange={this.handleInputChange}/>
                    <Input name="birthdate" label="Birthdate" hint="Dog Birthdate" type="date" required={true} onChange={this.handleInputChange}/>
                    <Textarea name="notes" label="Notes"hint="Notes about your dog =)" onChange={this.handleInputChange}/>
                    <Button variant="raised" color="primary" onClick={this.handleSubmit}>Save</Button>
                    <Button variant="raised" onClick={this.props.handleClose}>Cancel</Button>
                </Form>

                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        addDogDialog: state.dashboard.addDogDialog
    }
}

export default connect(mapStateToProps, actions)(AddDogDialog);