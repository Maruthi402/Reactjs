import React from "react";

class Forms extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            message: "Bangalore"
        }
        this.onChange = this.onChange.bind(this)
        
    }
    onChange(){
        this.setState({
            message:"Company"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.onChange()}>Click me</button>
            </div>
        )
    }
}
export default Forms