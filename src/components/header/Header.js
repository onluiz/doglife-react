import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MenuRight from '../menuRight/MenuRight';
import MenuLeft from '../MenuLeft/MenuLeft';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar 
        title="DogLife"
        iconElementLeft={<MenuLeft />}
        iconElementRight={<MenuRight />}/>
    );
  }

}
  
export default Header;