import {useState} from 'react'
const Counters=()=>{
    const [counters, setCounters]= useState(0)

    const increment = ()=>{
        setCounters(counters + 1)
    }

    const decrement = ()=>{
        setCounters(counters - 1)
    }

    const reset = ()=>{
        setCounters(0)
    }
    
    return(
        <div>
            <h1>{counters}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
        
    )

}
export default Counters