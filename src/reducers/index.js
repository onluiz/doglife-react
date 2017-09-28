import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import dashboard from './dashboard'

const dogLifeApp = combineReducers({
  dashboard,
  form: formReducer
})

export default dogLifeApp