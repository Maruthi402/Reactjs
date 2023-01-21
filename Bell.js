import React from "react";
import bellC from "./BellC.png";
import bellD from "./BellD.png";


class Bell extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            message: "Subscribe to myChannel",
            sub: "Subscribe",
            ImageURL: bellC
        }

    }
    styles={
        color:"blue",
        fontStyle:"italic"

    }
    Buttonchange = ()=>{
        this.setState({
            message:"Hit the bell icon never miss update",
            sub: "Subscribed"
        })
    }
    imageChange = () =>{
        this.setState({
            ImageURL: bellD,
            message:"Thank you happy learning"
        })
    }
    render(){
        return(
            <div>
                <h1 style={this.styles}>{this.state.message}</h1>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p />
                <img style={{width:"35px", color:"purple"}}src={this.state.ImageURL} onClick={this.imageChange} alt="bell" />



            </div>
        )
    }
}
export default Bell