import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './custom.scss'
import reportWebVitals from './reportWebVitals';


import {createStore,applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import RootReducer from './Redux/Reducers/rootReducer';
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk);
const enhancer = compose(
  middleware, // middleware
  // redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const store = createStore(RootReducer,enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
