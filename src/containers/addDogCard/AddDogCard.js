import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addDog } from '../../actions';

import DatePicker from 'material-ui/DatePicker';

import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';

const style = {
    margin: 12,
};

class AddDog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            breed: '',
            notes: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        console.log('handleInputChange');
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.dispatch(addDog(this.state));
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <Container fluid={true} style={style}>
                    <Row className="mui--align-middle">
                        <Col md="4"></Col>
                        <Col md="4">
                            <Panel>
                                <Form onSubmit={this.handleSubmit}>
                                    <legend>Add Dog</legend>
                                    <Input hint="nome" name="name" onChange={this.handleInputChange}/>
                                    <Input hint="raça" name="breed" onChange={this.handleInputChange}/>
                                    <Textarea hint="diga algo sobre seu pet" name="notes" onChange={this.handleInputChange}/>
                                    <Button variant="raised" color="primary" style={style}>Add</Button>
                                    <Link to="/"><Button variant="raised" >Voltar</Button></Link>
                                </Form>
                            </Panel>
                        </Col>
                        <Col md="4"></Col>
                    </Row>
                </Container>
            </div>
        );
    };

}

// let AddDog = ({dispatch}) => {
//     let input;

//     let onSubmit = (e) => {
//         console.log('onSubmit');
//         //console.log(input.value);
//         e.preventDefault()
//         //if (!input.value.trim()) {
//         //    return
//         //}
//         //dispatch(addDog(input.value))
//         //input.value = ''
//     }

//     return (
        // <div>
        //     <Container fluid={true} style={style}>
        //         <Row className="mui--align-middle">
        //             <Col md="4"></Col>
        //             <Col md="4">
        //                 <Panel>
        //                     <Form onSubmit={onSubmit}>
        //                         <legend>Add Dog</legend>
        //                         <Input hint="nome" />
        //                         <Input hint="raça" />
        //                         <DatePicker hintText="quando ele nasceu?" container="inline" />
        //                         <Textarea hint="diga algo sobre seu pet" />
        //                         <Button variant="raised" color="primary" style={style}>Add</Button>
        //                         <Link to="/"><Button variant="raised" >Voltar</Button></Link>
        //                     </Form>
        //                 </Panel>
        //             </Col>
        //             <Col md="4"></Col>
        //         </Row>
        //     </Container>
        // </div>
//     );
// };

// AddDog = connect()(AddDog)

export default connect()(AddDog);
