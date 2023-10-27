import React from "react";
import { Component } from "react";

class Conditionalrendering extends Component{
    constructor(){
        super()
        this.state = {
            islogin : false
        }
    }
    render(){

        return this.state.islogin? <><div>welcome tops</div></>:
        <><div>welcome guest</div></>
        // return this.state.islogin && <><div>welcome tops</div></>

        // let msg 
        // if (this.state.islogin) {
        //     msg = <><div><h1>welcome tops</h1></div></>
        // }
        // else{
        //     msg= <><div><h1>welcome guest</h1></div></>
        // }
        // return msg
        // return(
        // //     <>
        //     if(this.state.islogin){
        //         return<><h1>welcome tops</h1></>
        //     }
        //     else{
        //         return<><h1>welcome guest</h1></>
        //     }
    }
}
export default Conditionalrendering