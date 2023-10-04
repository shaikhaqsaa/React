import React from 'react';

import { Component } from 'react';
import Updatecounter from './Hoc';

class Clickcounter extends Component {
   

    render() { 
        const {count , incnumber , decnumber} = this.props
        return (
            <>
               <h1>Clickcounter</h1>
               <button onClick={incnumber}> +</button>
                 <p>{count}</p>
               <button onClick={decnumber}> -</button>
            </>
        );
    }
}
 
export default Updatecounter(Clickcounter);
