import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AddDogDialog from '../addDogDialog/AddDogDialog'
import './Header.css'

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            openAddDogDialog: false
        };
    }

    handleChange = (event, index, value) => this.setState({value});
    handleAddDogDialog = (event) => {
        this.setState({openAddDogDialog: !this.state.openAddDogDialog})
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

                <AddDogDialog
                    open={true}
                    handleClose={this.handleAddDogDialog}
                />
            </div>
        )
    }
}

export default Header;