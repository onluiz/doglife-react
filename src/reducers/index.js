import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import app from './app'
import dashboard from './dashboard'

const dogLifeApp = combineReducers({
  app,
  dashboard,
  form: formReducer
})

export default dogLifeApp