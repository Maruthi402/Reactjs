import React from 'react'

class Mobile extends React.Component{
    constructor(props){
        super(props)

        this.state = {
           count: 0
        }
    }
    updateClick=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    render(){
        const {count} = this.state
        return(
            <div>
                
                
                <button onClick={this.updateClick}>Click {count} Me</button>
            </div>
        )
    }
}
export default Mobile
