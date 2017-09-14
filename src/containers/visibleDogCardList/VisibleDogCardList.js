import { connect } from 'react-redux'
import DogCardList from '../../components/dogCardList/DogCardList'
import * as actions from '../../actions/dashboard'

const mapStateToProps = state => {
    return { 
        dogs: state.dashboard.dogs
    }
}

const VisibleDogCardList = connect(mapStateToProps, actions)(DogCardList)

export default VisibleDogCardList