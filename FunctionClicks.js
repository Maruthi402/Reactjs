import React from "react";

function FunctionClicks(){
    function clickHandler(){
        console.log("Maruthi");
    }
    return(
        <div>
            <button onClick={clickHandler}>Click me</button>
        </div>
    )
}
export default FunctionClicks