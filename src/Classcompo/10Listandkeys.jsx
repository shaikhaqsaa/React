import React from "react";
import { Component } from "react";

class Listandkeys extends Component{
    constructor(){
        super()
        this.state = {
            item : [1,2,3,4,5]
        }
    }
    Add = () => {
        this.setState({
            item : [6,7,1,1,2,3,4,5]
        })
    }
    render(){
        let items = this.state.item.map((list)=><li key={list.toString()}></li>)
    return(
        <>
         <ul>
                {items}
              </ul>
              <h1>{this.props.children}</h1>
              <button onClick={this.Add}>add</button>
              <h3>{this.props.name}</h3>
              </>
    );

    
    }
}
export default Listandkeys;