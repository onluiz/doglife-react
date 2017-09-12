import React, { Component } from 'react'
import DogCard from '../dogCard/DogCard'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

class DogCardList extends Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Col md="3"><DogCard /></Col>
                        <Col md="3"><DogCard /></Col>
                        <Col md="3"><DogCard /></Col>
                        <Col md="3"><DogCard /></Col>
                    </Row>
                    <Row>
                        <Col md="3"><DogCard /></Col>
                        <Col md="3"><DogCard /></Col>
                        <Col md="3"><DogCard /></Col>
                        <Col md="3"><DogCard /></Col>
                    </Row>
                    <Row>
                        <Col md="3"><DogCard /></Col>
                        <Col md="3"><DogCard /></Col>
                        <Col md="3"><DogCard /></Col>
                        <Col md="3"><DogCard /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default DogCardList;