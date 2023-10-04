import React from 'react';

import { useEffect } from 'react';
const User = (props) => {
  useEffect(()=>{
    alert("called useEffect1")
    alert("called useEffect1")
    // console.log("called useEffect1");
},[props.count]) 

    return ( 
        <>
          <h1>user data</h1>
          <h3>{props.count}</h3>
           <h3>{props.data}</h3>
        </>
     );
}
 
export default User;