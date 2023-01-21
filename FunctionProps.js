import React from 'react'

function FunctionProps(props){
    return(
        <div>
            <h1>This is functional component</h1>
            <h1>{props.name} from {props.place}</h1>

        </div>
    )
}
export default FunctionProps