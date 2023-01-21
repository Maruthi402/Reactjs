import React, { Component } from 'react'
import bellC from './BellC.png';
import bell from './Bell.png';
import bellD from './BellD.png';

export class NewComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: "pleaes subscribe to my channel",
            sub: "subscribe",
            imageURL: bellC
           
        }
    }
    changeHandler=()=>{
        this.setState({
            message: "dont for get",
            sub: "subscribed"
           
        })
    }
    imageChange = ()=>{
      this.setState({
        imageURL: bellD,
        message: 'Never message new update'
      })
    }
   
  render() {
    return (
      <div>
        <h1>{this.state.message} </h1>
        <button onClick={this.changeHandler}>{this.state.sub}</button>
        <img style={{width:"60px", height:"60px"}} src={this.state.imageURL}  alt="bellicon" onClick={this.imageChange} />
      </div>
    )
  }
}

export default NewComp


