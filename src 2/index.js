import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux'
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import {rootReducer} from './redux/rootReducer'
import { connectRouter } from "connected-react-router";
import thunk  from "redux-thunk"
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login'
import Main from './pages/main'
import createHistory from "history/createBrowserHistory";
    export const history = createHistory();


const store = createStore(connectRouter(history)(rootReducer), compose(applyMiddleware(thunk)))

    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

