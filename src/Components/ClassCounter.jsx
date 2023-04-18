import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state = {number: 0}
    }

    decreaseOnclickClass=()=>{
        this.setState({number: this.state.number-1})
    }
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h1>Counter: {this.state.number}</h1>
        <button onClick={()=>{this.setState({number: this.state.number+1})}}>Increase</button>
        <button onClick={this.decreaseOnclickClass}>Decrease</button>
      </div>
    )
  }
}
