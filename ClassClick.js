import React from "react";

class ClassClick extends React.Component {
    clickHandler(){
        console.log("Button Clicked");
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick