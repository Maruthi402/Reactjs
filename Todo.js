import { useState } from "react";

import ListItem from "./ListItem";

export default function Todo(){
    const [todo, setTodo]=useState("")
    const [todoList, setTodoList] = useState([]);

    const handleChange=(event)=>{
        setTodo(event.target.value);
      
    }

    
    const handleSubmit=(event)=>{
        event.preventDefault();

        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        console.log(todoList);
        setTodo("");
       

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                
                <input type="text" value={todo} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            {todoList.map((item)=>(
                // <h1>{item}</h1>
               
                <ListItem key={item} name={item}/>
            ))}
                       </div>
    )

}