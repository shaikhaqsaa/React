import React from "react";
import { Component } from "react";

const Updatecounter = Originalcompo => {
    class Newcompo extends Component {
        constructor(){
            super()
            this.state ={
                count : 0
            }
        }
        incnumber =()=>{
            this.setState({count : this.state.count + 1})
        }
        decnumber =()=>{
            this.setState({count : this.state.count - 1})
        }
        render() {
            return (
                <>
                    <Originalcompo incnumber={this.incnumber} decnumber={this.decnumber} count={this.state.count}/>
                </>
            )
        }
    }
    return  Newcompo


}
export default Updatecounter;
