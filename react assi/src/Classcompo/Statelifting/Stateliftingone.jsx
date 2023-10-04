import React from "react";
import { Component } from "react";
import Stateliftingsecond from "./Stateliftingsecond";

class Stateliftingone extends Component {
    constructor(props){
        super(props)
        this.state = props
    }

    clickP=(data)=>{
        console.log("clickone" , data);
        this.setState({
            data : data
        })

    }
    render() { 
        return (
            <>
             <h1> State Component one</h1>
             <Stateliftingsecond clickP={this.clickP} />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
            </>
        );
    }
}
 
export default Stateliftingone;
