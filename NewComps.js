import React from "react";

class NewComps extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            message: "Learn to maruthi"
        }
    }
    styles={
        fontStyle:"Italic",
        color:"purple"
    }
    buttonChange=()=>{
        this.setState({
            message: 'thank you subscribe'
        })
    }

    render(){
        return(
            <div>
                <h1 style={this.styles}> {this.state.message} Welcome</h1>
                <button onClick={this.buttonChange}> Subscribe</button>
            </div>
        )
    }
} 
export default NewComps