import React, { Component } from 'react'

export class Button extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    //   this.increment = this.increment.bind(this);
    }
    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }
    
    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        
      </div>
    )
  }
}

export default Button
