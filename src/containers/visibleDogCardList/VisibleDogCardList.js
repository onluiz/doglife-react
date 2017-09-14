import { connect } from 'react-redux'
import DogCardList from '../../components/dogCardList/DogCardList'
import { showAll } from '../../actions/index'

const mapStateToProps = state => {
    return {
        dogs: state.dogs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showAll: showAll
    }
}

const VisibleDogCardList = connect(
    mapStateToProps,
    mapDispatchToProps
)(DogCardList)

export default VisibleDogCardList