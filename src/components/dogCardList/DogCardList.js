import React, { Component } from 'react'
import DogCard from '../dogCard/DogCard'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import { connect } from 'react-redux'
import * as actions from '../../actions/dashboard'

class DogCardList extends Component {
    componentDidMount() {
        this.props.getAllDogs();
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        {this.props.dogs.map(dog => {
                            return <Col md="3" key={dog._id}><DogCard dogName={dog.name} /></Col>
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        dogs: state.dashboard.dogs
    }
}

export default connect(mapStateToProps, actions)(DogCardList);