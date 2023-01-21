import {useState} from 'react'

function FuncationalCounter(){
    const [counter, setCounter] = useState(0)

    const increment = ()=>{
        setCounter(counter + 1)
    }
    const decrement = ()=>{
        setCounter(counter - 1)
    }
    const reset = ()=>{
        setCounter(0)
    }
    return(
        <div>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
}
export default FuncationalCounter