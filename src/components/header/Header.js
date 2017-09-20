import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AddDogDialog from '../addDogDialog/AddDogDialog'
import { connect } from 'react-redux'
import * as actions from '../../actions/dashboard'
import './Header.css'

class Header extends Component {
    handleAddDogDialog = (event) => {
        this.props.manageAddDogDialog(!this.props.addDogDialog.open);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <AppBar
                title="Doglife"
                iconElementLeft={
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon className="MoreVertIconStyle"/></IconButton>}
                        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        >
                        <MenuItem primaryText="New Dog" onClick={this.handleAddDogDialog}/>
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Sign out" />
                    </IconMenu>
                }
                />

                <AddDogDialog handleClose={this.handleAddDogDialog}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        addDogDialog: state.dashboard.addDogDialog
    }
}

export default connect(mapStateToProps, actions)(Header);