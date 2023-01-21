import React from 'react';

// function Greet() {
//    return <h1>Hello Maruthi</h1>
//}

  const Greet = (props) => {
    

    return(
      <div>
        <h1>Hello {props.name} a.k.a {props.heroname}</h1>
      
      </div>
    ) 
   
    
    

  }
export default Greet