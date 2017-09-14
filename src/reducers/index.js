import { combineReducers } from 'redux'
import dogs from './dogs'
import visibilityFilter from './visibilityFilter'

const dogLifeApp = combineReducers({
  dogs,
  visibilityFilter
})

export default dogLifeApp