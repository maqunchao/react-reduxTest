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
//把state映射到props, 接收一个state,将state的n变成props的n
function stateToprops(state) {
  return {
    n : state.n
  }
}
//将dispatch映射到props,(接收一个dispatch,将其映射到addNum)  可以是函数也可以是对象
function dispathToprops(dispatch){
    return {
      addNum: ()=> dispatch({type:"add", payload:1}),
      reduceNum: ()=> dispatch({type:"reduce", payload:2}),

    }
}
// const mapDispatchToProps = {
//   addNum:()=>{
//     return {type:"add", payload:1}
//   }
// }

export default connect(stateToprops, dispathToprops)(App);
