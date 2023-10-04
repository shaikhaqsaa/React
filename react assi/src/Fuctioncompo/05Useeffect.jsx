import React from 'react';
import { useEffect ,useState } from 'react';
// import Usestate from './01Usestate';
import User from './User';

const Useeffect = () => {
    const [count , setCount] =useState(0)
    const [data , setData] =useState(10)
    
   
    // useEffect(()=>{
    //     // alert("called useEffect2")
    // })
    return ( 
        <>
           <h1>useeffect</h1>
           <User count={count} data={data}/>
           <button onClick={()=> setCount(count + 1)}>update count</button>
           <button onClick={()=> setData(data + 1)}>update count</button>
        </>
     );
}
 
export default Useeffect;
