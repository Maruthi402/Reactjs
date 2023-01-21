import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Maruthi</h1>
    //     </div>
    // )
    return React.createElement('div', null, React.createElement('h1', null, "Maruthi"));
}

export default Hello