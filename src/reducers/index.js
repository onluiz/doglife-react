import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import app from './app'
import mainPublicPage from './mainPublicPage'
import dashboard from './dashboard'

const dogLifeApp = combineReducers({
  app,
  mainPublicPage,
  dashboard,
  form: formReducer
})

export default dogLifeApp