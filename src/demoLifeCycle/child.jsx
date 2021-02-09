import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props);
        console.log("contructor run");
        
    }
    componentWillMount(){
        console.log("componentWillMount run");
    }
    render() {
        console.log("render run");
        return (
            <div>
                <h1>demo life cycle</h1>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount run");
    }
}
