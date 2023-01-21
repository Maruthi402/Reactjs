import React, { Component } from 'react'

export class LifeCylceA extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: "Maruthi"
        }
        console.log("LifeCycleA Constructor");
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null;
    }
    componentDidMount(){
        console.log('LifeCylceA componentDidMount');
    }

  render() {
    console.log('LifeCycleA render');
    return <div>LifeCycle A</div>
    
  }
}

export default LifeCylceA
