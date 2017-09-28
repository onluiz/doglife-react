import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import DogForm from '../dogForm/DogForm';
import { connect } from 'react-redux';
import * as actions from '../../actions/dashboard';

class AddDogDialog extends Component {
    handleAddDogDialog = (event) => {
        this.props.manageAddDogDialog(!this.props.addDogDialog.open);
        event.preventDefault();
    }

    handleSubmit = (values) => {
        if(values._id === "") {
            this.props.addDog(values);
        } else {
            this.props.updateDog(values);
        }
    }

    render() {
        return (
            <div>
                <Dialog
                    title="Add/Edit Dog"
                    modal={true}
                    open={this.props.addDogDialog.open}>
                
                <DogForm 
                    onSubmit={ this.handleSubmit }
                    onCancel={ this.handleAddDogDialog }
                    initialValues={this.props.dog}/>

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