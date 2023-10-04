import React from 'react';
import { useState } from 'react';


const Fuctioncount = () => {
    // const [count ,  setCount] = useState(55)
    // const [number ,  setNumber] = useState(0)
    // const [text ,  setText] = useState("dinesh")
    // return (
    //     <>
    //       <button onClick={()=> setCount(count + 1)}>add{count}</button>
    //       <h1>{text}</h1>
    //     </>
    //   );

    const Startnumber = 10
    const [count ,  setCount] = useState(Startnumber)

    return (
        <>
          <button onClick={()=> setCount(count + 1)}>add{count}</button>
          {/* <h1>{text}</h1> */}
        </>
      );
}
 
export default Fuctioncount;