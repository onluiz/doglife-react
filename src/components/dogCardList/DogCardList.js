import React from 'react'
import PropTypes from 'prop-types'
import DogCard from '../dogCard/DogCard'

const DogCardList = ({dogs, onDogClick}) => (
    <ul>
        {dogs.map(dog => (
        <DogCard key={dog.id} {...dog} onClick={() => onDogClick(dog.id)} />
        ))}
    </ul>
)

DogCardList.propTypes = {
    dogs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onDogClick: PropTypes.func.isRequired
}
  
 export default DogCardList