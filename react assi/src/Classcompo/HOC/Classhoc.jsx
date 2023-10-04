import React from 'react';
import { Component } from 'react';
import Clickcounter from './Clickcounter';
import Hovercounter from './Hovercounter';

class Classhoc extends Component {

    render() { 
        return (
            
            <>
             <h1>higher-order component </h1>
             <Clickcounter/>
             <Hovercounter/>
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
 
export default Classhoc;