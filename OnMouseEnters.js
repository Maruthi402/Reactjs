import React, { Component } from "react";

class  OnMouseEnters extends Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }

    }
    increment=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    decrement=()=>{
        this.setState({
            count:this.state.count -1
        })
    }
    render(){

        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onMouseEnter={this.increment}>Increment</button>
                <button onMouseEnter={this.decrement}>Decrement</button>
            </div>
        )
    }
}
export default OnMouseEnters