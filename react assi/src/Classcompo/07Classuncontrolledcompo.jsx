import React from "react";
import { Component } from "react";

class Classuncontrolledcompo extends Component {
    constructor(){
        super()
        this.mitesh = React.createRef()
    }

    login =(event)=>{
        console.log("login");
        event.preventDefault()
        console.log(this.mitesh.current.value);
    }
    
    render() { 
        return (
            <>
            <form onSubmit={(event)=> this.login(event)}>

                <input type="text"  />
                <textarea name="" ref={this.mitesh} id="" cols="30" rows="10"></textarea>
                <input type="submit" />
                
            </form>
              
            </>
        );
    }
}
 
export default Classuncontrolledcompo;