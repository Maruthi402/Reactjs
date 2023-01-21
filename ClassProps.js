import React, {Component} from 'react'




class ClassProps extends Component{
    styles={
        
    }
    render(){
        return(
            <div >
                <h1>Hello {this.props.name} from {this.props.place}, Welcome to Leanrs</h1>
                
                <p>{this.props.children}</p>
              
                

            </div>
        )
    }
}
export default ClassProps