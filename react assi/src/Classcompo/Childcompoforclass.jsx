import React from 'react';
import { Component } from 'react';
class Childcompoforclass extends Component {
 
    render() { 
        
        return (
            <>
              <p>Childcompoforclass</p>
              <h2>{this.props.name}</h2>
               <div>
                {this.props.children}
               </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              children
            </>
        );
    }
}
 
export default Childcompoforclass;