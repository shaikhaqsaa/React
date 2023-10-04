import React from 'react';
import { Component } from 'react';

class ClassConditionrendering extends Component {

    constructor(){
        super()
        this.state={
            isloging : false
        }
    }
    render() { 

        return this.state.isloging && <h1>welcome Tops</h1>


        // return this.state.isloging ? 
        // <div><h1>welcome Tops</h1></div> : 
        // <div><h1>welcome Guest</h1></div>

        // let msg
        
        // if (this.state.isloging) {
        //     msg =  <><div><h1>welcome Tops</h1></div></>     
        // }
        // else{
        //     msg =  <><div><h1>welcome Guest</h1></div></>
        // }
        // return msg

        // if(this.state.isloging){
        //     return <><div><h1>welcome Tops</h1></div></>
        // }
        // else{
        //     return <><div><h1>welcome Guest</h1></div></>
        // }


        // return (
        //     <>
        //       <h1>welcome Tops</h1>
        //       <h1>welcome Guest</h1>
        //     </>
        // );
    }
}
 
export default ClassConditionrendering;
