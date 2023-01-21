import React from 'react'

class Laptop extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            brand: "Acer",
            model: "Indian",
            price: "Rs.25000"

        }
    }
    changePrice=()=>{
        this.setState({
            price: "Rs.35000"
        })
    }
    changeModel=()=>{
        this.setState({
            model: "America"
        })
    }
    render(){
        return(
            <div>
                <h1>BestLaptop:-{this.state.brand}</h1>
                <h1>Model: {this.state.model}</h1>
                <h1>Price: {this.state.price}</h1>
                <button type='button' onClick={this.changePrice}>Update price</button>
                <button type='button' onClick={this.changeModel}>Update Model</button>
            </div>
        )
    }
}
export default Laptop