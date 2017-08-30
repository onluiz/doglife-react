import { combineReducers } from 'redux'
import dogs from './dogs'
import visibilityFilter from './visibilityFilter'

const dogsApp = combineReducers({
    dogs,
    visibilityFilter
})

export default dogsApp