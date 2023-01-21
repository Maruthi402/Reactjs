import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn: true
        }
    }
  render() {
    return this.state.isLoggedIn ? (
        <div>Welcome to Maruthi</div>
    ) :(
        <div>Welcome to Bangalore</div>
    )

        // let message // 1st approach
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome </div>
        // }else{
        //     message = <div>Welcome 1</div>
        // }
        // return <div>{message}</div>

    // if(this.state.isLoggedIn){  // 2nd approach
    //     return <div>Welcome Maruthi</div>
    // }
    // else{
    //     return <div>Welcome Guest</div>
    // }

    
      
    
   
  }
}

export default ConditionalRendering
