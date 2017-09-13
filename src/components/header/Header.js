import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './Header.css'

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    handleChange = (event, index, value) => this.setState({value});

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
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Send feedback" />
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" />
                    </IconMenu>
                }
                />

                
            </div>
        )
    }
}

export default Header;