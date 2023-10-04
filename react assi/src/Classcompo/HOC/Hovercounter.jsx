import React from 'react';
import { Component } from 'react';
import Updatecounter from './Hoc';

class Hovercounter extends Component {
    

    render() { 
        const {count , incnumber} = this.props
        return (
            <>
              <h1>hovercounter</h1>
              <h2 onMouseOver={incnumber}>{count}</h2>

            </>
        );
    }
}
 
export default Updatecounter(Hovercounter);