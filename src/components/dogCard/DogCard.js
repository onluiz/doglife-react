import React, { Component } from 'react'
import Panel from 'muicss/lib/react/panel'
import RaisedButton from 'material-ui/RaisedButton'
import ActionCreate from 'material-ui/svg-icons/content/create'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import { connect } from 'react-redux'
import * as actions from '../../actions/dashboard'
import './DogCard.css'
import dogImage from '../../assets/images/dog-icon-35930.png'

class DogCard extends Component {

    handleEdit = () => {
        this.props.editDog(this.props.dogId)
    }

    render() {
        return (
            <div>
                <Panel className="dogCardPanel">
                    <div className="dogName">
                        {this.props.dogName} - {this.props.dogId}
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
                                icon={<ActionCreate  />}
                                onClick={this.handleEdit} /></span>
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

export default connect(null, actions)(DogCard);