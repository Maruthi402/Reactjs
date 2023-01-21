import React from "react";

class Embed extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <Simple />
            </div>
        )
    }
}

class Simple extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome 123</h1>
            </div>
        )
    }
}

export default Embed