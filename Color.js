import React, { Component } from "react";

class Color extends Component{
   
    render() {
        const simpleStyle={
            color:"white",
            backgroundColor: "blue",
            margin: "auto",
            fontFamily: "new roman"
    
        }

      return (
        <div>
          <h1 style={{simpleStyle}}>Hello Simple</h1>
        </div>
      )
    }
}
export default Color