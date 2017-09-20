import React, { Component } from 'react'
import Panel from 'muicss/lib/react/panel'
import RaisedButton from 'material-ui/RaisedButton'
import ActionCreate from 'material-ui/svg-icons/content/create'
import ActionDelete from 'material-ui/svg-icons/action/delete'
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
                    <div className="divDogData">
                        <span className="dogData">
                            &nbsp;&nbsp;
                            <RaisedButton
                                title="Edit your dog's data =)"
                                primary={true}
                                icon={<ActionCreate  />} /></span>
                        <span className="dogData">
                            &nbsp;&nbsp;
                            <RaisedButton 
                                title="Remove the dog =(" 
                                secondary={true}
                                icon={<ActionDelete />}/></span>
                    </div>
                </Panel>
            </div>
        )
    }
}

export default DogCard;