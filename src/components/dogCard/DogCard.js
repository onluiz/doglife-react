import React, { Component } from 'react'
import Panel from 'muicss/lib/react/panel'
import Divider from 'muicss/lib/react/divider'
import './DogCard.css'
import dogImage from '../../assets/images/dog-icon-35930.png'

class DogCard extends Component {
    render() {
        return (
            <div>
                <Panel className="dogCardPanel">
                    <div className="dogName">
                        {this.props.dogName}
                    </div>
                    <div>
                        <img src={dogImage} alt="" className="dogCardImage"/> 
                    </div>
                    <Divider />
                    <div className="divDogData">
                        <span className="dogData">3 Anos</span>
                        <span className="dogData mui--divider-left">&nbsp;&nbsp;Vacinas em Dia</span>
                        <span className="dogData mui--divider-left">&nbsp;&nbsp;Editar</span>
                    </div>
                </Panel>
            </div>
        )
    }
}

export default DogCard;