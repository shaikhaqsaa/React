import React from "react";
import { Component } from "react";

class Classcompostate extends Component{
    constructor(){
        super()
        this.state = {
            count : 0,
            name : "aqsa" 
        }
    }
    increment=()=>{
        console.log("increment");
        this.setState({count : this.state.count + 1})
        this.setState({name : this.state.name ="shaikh"})
    }
    decrement=()=>{
        console.log("decrement");
        this.setState({count : this.state.count - 1})
    }

    render(){
        return(
            <>
            <h1>class compo state</h1>
            <h2>{this.state.count}</h2>
            <h2>{this.state.name}</h2>
            <button onClick={this.increment}
            >+
            </button>
            <button onClick={this.decrement}>-</button>
            </>

        )
    }
}
export default Classcompostate