import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import VisibleDogCardList from '../../containers/visibleDogCardList/VisibleDogCardList';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {
    render() {
        return (
        <div>
            <RaisedButton 
                label="Add Dog" 
                primary={true}
                containerElement={<Link to="/dogs/add" />}
            />
            <VisibleDogCardList />
        </div>
        );
    }
}

export default Home;