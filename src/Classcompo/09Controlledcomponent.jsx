import React from "react";
import { Component } from "react";

class Controlledcomponents extends Component{
    constructor(){
        super()
        this.state = {
            name : ""
        }
    }
    submit =(event)=>{
        event.preventDefault();
        console.log("submit");
        console.log(this.state.name);
    }
    render(){
        return(
            <>
            <form onSubmit={this.submit}>
                <input type="text" value={this.state.name} id="uname" className="uname" onChange={(event)=>this.setState({name : event.target.value})} />
                <input type="text" id="uname" className="uname" />
            </form>
            </>
        )
    }
}
export default Controlledcomponents