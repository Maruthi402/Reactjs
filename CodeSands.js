import React from "react";

class CodeSands extends React.Component{
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }
    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement(){
        this.setState({
            count:this.state.count - 1
        })
    }
    reset(){
        this.setState({
            count:0
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.decrement()}>Decrement</button>
                <button onClick={()=>this.reset()}>Reset</button>
            </div>
        )
     
    }
}
export default CodeSands