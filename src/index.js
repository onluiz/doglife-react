import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import dogLifeApp from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(dogLifeApp, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
