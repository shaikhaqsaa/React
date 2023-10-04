import React, { useContext } from 'react';
import { Fname } from './11Usecontexthook';

const Compthre = () => {

    const name = useContext(Fname)
    return (
        <>
         <h1>hello {name}</h1>
        </>
     );
}
 
export default Compthre;