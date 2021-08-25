import React from 'react';
import {render} from 'react-dom';

// redux
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from "react-redux"

// reducer // middleware
import rootReducer from './redux/rootReducer';
import thunk from "redux-thunk"

// components // css
import App from './App';
import { checkIfStorageAvailable, initLocalStorageWithMockData } from './redux/manageLocalStorage';

// check localStorage
if (!checkIfStorageAvailable('localStorage')) {
  alert("loacal storage is unavaliable, sadly...")
  console.log("loacal storage is unavaliable, sadly...")
}

  // localStorage.clear()  /////////////////////////////// CLEAR LOCAL STORAGE if app crashes
  initLocalStorageWithMockData()


// CREATE STORE
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)


// WRAP APP WITH PROVIDER
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

//RENDER APP
render(
  app,
  document.getElementById('root')
);