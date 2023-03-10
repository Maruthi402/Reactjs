import React, { Component } from 'react'

export class HoverCounter extends Component {
    constructor(props){
        super(props)

        this.state= {
            count: 0
        }
    }
    incrementCounter = () => {
        this.setState(prevState =>{
            return { count: prevState.count + 1 }
        })

    }
  render() {
    const { count } = this.state
    return  <h1 onMouseOver={this.incrementCounter}>Hovered {count} times</h1>
    
    
  }
}

export default HoverCounter
