import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: "hello"

        }
    }
    clickHandler(){
        this.setState({
            message: "Good bye"
        })
    }

    // clickHandler = () => {
    //     this.setState({
    //         message: "Good Bye!"
    //     })
    // }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
        {/* <button onClick={this.clickHandler}>Click Me</button> */}
      </div>
    )
  }
}

export default EventBind
