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

let AddDog = ({dispatch}) => {
    let input;

    let onSubmit = (e) => {
        console.log('onSubmit');
        //console.log(input.value);
        e.preventDefault()
        //if (!input.value.trim()) {
        //    return
        //}
        //dispatch(addDog(input.value))
        //input.value = ''
    }

    return (
        <div>
            <Container fluid={true} style={style}>
                <Row className="mui--align-middle">
                    <Col md="4"></Col>
                    <Col md="4">
                        <Panel>
                            <Form onSubmit={onSubmit}>
                                <legend>Add Dog</legend>
                                <Input hint="nome" />
                                <Input hint="raça" />
                                <DatePicker hintText="quando ele nasceu?" container="inline" />
                                <Textarea hint="diga algo sobre seu pet" />
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

AddDog = connect()(AddDog)

export default AddDog;
