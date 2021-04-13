import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';


class App extends Component {
  constructor(){
    super()

  }

  render(){
    return(
      <div>
        <div>{this.props.n}</div>
        <button id="btn" onClick={()=>this.props.addNum()}>+1</button>
        <button id="btn1" onClick={()=>this.props.reduceNum()}>-2</button>

      </div>
    )
  }
}
//
function stateToprops(state) {
  return {
    n : state.n
  }
}
//
function dispathToprops(dispatch){
    return {
      addNum: ()=> dispatch({type:"add", payload:1}),
      reduceNum: ()=> dispatch({type:"reduce", payload:2}),

    }
}

export default connect(stateToprops, dispathToprops)(App);
