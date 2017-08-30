import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

class MenuRight extends Component {

  static muiName = "IconMenu";

  render() {
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem 
          primaryText="Home"
          containerElement={<Link to="/"></Link>}
          />
          <MenuItem 
            primaryText="About"
            containerElement={<Link to="/about"></Link>}
          />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    );
  };

}

export default MenuRight;