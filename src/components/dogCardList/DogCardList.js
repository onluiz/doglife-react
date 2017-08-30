import React from 'react'
import PropTypes from 'prop-types'
import DogCard from '../dogCard/DogCard'

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 500,
      height: 450,
      overflowY: 'auto',
    },
};

const DogCardList = ({dogs, onDogClick}) => (
    <div style={styles.root}>
        <GridList
            cellHeight={180}
            style={styles.gridList}
        >
            {dogs.map(dog => (
                <DogCard key={dog.id} {...dog} onClick={() => onDogClick(dog.id)} />
                ))}
        </GridList>
    </div>
    // <ul>
    //     {dogs.map(dog => (
    //     <DogCard key={dog.id} {...dog} onClick={() => onDogClick(dog.id)} />
    //     ))}
    // </ul>
)

DogCardList.propTypes = {
    dogs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        notes: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    onDogClick: PropTypes.func.isRequired
}
  
 export default DogCardList