import { useState } from "react";
import Child from "./Child";

export default function Parent(){
    const [parentcount, setParentCount]= useState(0);
    const [childcount, setChildCount] = useState(0);

    const changeParentCount=()=>{
        setParentCount(parentcount + 1)
    }
    const changeChildCount=()=>{
        setChildCount(childcount + 1)
        
    }
    return(
        <div>
            <h1>Parent Count is: {parentcount}</h1>
            <button onClick={changeParentCount}>Increment Parent Count</button>
            <Child count={childcount}/>
            <button onClick={changeChildCount}>Increment Child Count </button>
        </div>
    )
}