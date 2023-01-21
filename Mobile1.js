// import React from "react"
// function Mobile1(props){
//     return(
//         <div>
//             <h1 style={{color:"Blue"}}>Mobile1 Brand:{props.name} <br/>{props.model}</h1>
            
//             </div>
//     )
// }

import React from "react"
import styles from "./style.css"
class Mobile1 extends React.Component{
   
    render(){
        return(
            <div style={styles.h1}>
                <h1>Name:-{this.props.name}</h1>
                <h1>Model:-{this.props.model}</h1>
            </div>
        )
    }
}
export default Mobile1