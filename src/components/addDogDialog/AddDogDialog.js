import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import axios from 'axios'

class AddDogDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            nickname: "",
            birthdate: "",
            notes: "",
        }
    }

    handleSubmit = (event) => {
        let newDog = this.state;

        axios.post("http://localhost:8080/dogs", newDog)
        .then(res => console.log(res))
        .catch(err => console.log(err));

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
                    open={this.props.open}
                >
                    
                <Form>
                    <Input name="name" label="Name" hint="Dog Name" required={true} onChange={this.handleInputChange}/>
                    <Input name="nickname" label="Nickname" hint="Dog Nickname" required={true} onChange={this.handleInputChange}/>
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

export default AddDogDialog;