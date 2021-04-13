import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import { Provider } from "react-redux";



//1.1 创建接受旧的state和action, 生成新的state的函数
let reducers = (state, action) => {
  if (state === undefined) {
    return {n:0}
  } else {
    if(action.type === 'add'){
      var newState = {n: state.n + action.payload}
      return newState
    } else if(action.type === 'reduce'){
      var newState = {n: state.n - action.payload}
      return newState
    }else{
      return state
    }
  }
}

//1.根据redux创建store
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
