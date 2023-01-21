 import React from 'react'
 function Child({count}){
    console.log("Child Component is rerendered")
    return(
        <div>
            <h1>This is Child Count is: {count}</h1>
            </div>
    )
}
export default  React.memoi(Child);