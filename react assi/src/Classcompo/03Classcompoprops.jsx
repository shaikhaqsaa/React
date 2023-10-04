import React from 'react';
import { Component } from 'react';
import Childcompoforclass from './Childcompoforclass';
class Classcompoprops extends Component {

    render() { 
        return (
            <>
             <h1>Classcompoprops</h1>
             <Childcompoforclass name="sumit" email="sumit@gmail.com"/>
            </>
        );
    }
}
 
export default Classcompoprops;