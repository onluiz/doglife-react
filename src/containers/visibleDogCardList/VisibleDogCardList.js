import { connect } from 'react-redux'
import { toggleDog } from '../../actions'
import DogCardList from '../../components/dogCardList/DogCardList'

const getVisibleDogs = (dogs, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return dogs
    }
}

const mapStateToProps = state => {
    return {
      dogs: getVisibleDogs(state.dogs, state.visibilityFilter)
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      onDogClick: id => {
        dispatch(toggleDog(id))
      }
    }
}
  
const VisibleDogCardList = connect(
    mapStateToProps,
    mapDispatchToProps
 )(DogCardList)
  
 export default VisibleDogCardList