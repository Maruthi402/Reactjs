import React, { Component } from 'react'
import LifeCylceA from './LifeCycleA';

export class LifeCycleUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Maruthi"
        }
        console.log("LifeCycleA Constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps');
        return null;
    }
    componentDidMount() {
        console.log('LifeCylceA componentDidMount');
    }
    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log('LifeCylceA getSnapshotBeforeUpdate');
    }
    componentDidUpdate() {
        console.log('LifeCylceA componentDidUpdate');
    }
    render() {
        console.log('LifeCycleA render');
        return <div>LifeCycle A</div>

    }
}

export default LifeCycleUpdate
