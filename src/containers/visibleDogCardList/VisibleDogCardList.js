import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DogCardList from '../../components/dogCardList/DogCardList'
import { showAll } from '../../actions/index'

const getVisibleDogs = (dogs, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return [{_id: 1, name: "aaa"}]
    }
}

const mapStateToProps = state => {
    return {
        dogs: state.dogs.dogs
    }
}

const mapDispatchToProps = dispatch => {
    showAll: dispatch(showAll)
}

const VisibleDogCardList = connect(
    mapStateToProps,
    mapDispatchToProps
)(DogCardList)

export default VisibleDogCardList