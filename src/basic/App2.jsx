import React, { Component } from 'react'


export default class App2 extends Component {
  state = {
    num: 1
  }

  render() {
    return (
        
      <div>
        <h2>数字:{this.state.num}</h2>
        <button onClick={()=>
            this.setState({num: this.state.num+1})}>累加</button>
      </div>
    )
  }
}

/*
  state -> setState
*/ 
