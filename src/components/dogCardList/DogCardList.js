import React, { Component } from 'react'
import DogCard from '../dogCard/DogCard'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import axios from 'axios'

class DogCardList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dogs: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/dogs')
        .then(res =>this.setState({dogs: res.data}))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        {this.state.dogs.map(dog => {
                            return <Col md="3" key={dog._id}><DogCard dogName={dog.name} /></Col>
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default DogCardList;