import React from "react";
import { createRef } from "react";
import { Component } from "react";

class Uncontrolledcomponents extends Component{
    constructor(){
        super()
        this.input = createRef();
    }   
    submit=(event)=>{
        event.preventDefault();
        console.log("submit");
        console.log(this.input.current);
        console.log(this.input.current.value);
    }
    render(){
        return(
            <>
            <form onSubmit={this.submit}>
                <input type="text" name="uname" ref={this.input} id="uname" />
                <input type="submit" name="btn" id="btn" />
            </form>
            </>
        )
    }
}
export default Uncontrolledcomponents