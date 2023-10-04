import React from 'react';
import { Component } from 'react';

class Stateliftingsecond extends Component {
   

    render() { 
        return (
            <>
            <h2>state Component second</h2>
            <button onClick={()=>this.props.clickP("mitesh")}>click-me</button>
            
            </>
        );
    }
}
 
export default Stateliftingsecond;