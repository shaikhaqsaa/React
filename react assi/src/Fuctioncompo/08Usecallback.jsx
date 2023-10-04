import React, { useCallback, useState } from 'react';
import Usechild from './09Usechild';

const Usecallback = () => {
    
    const [count , setCount] = useState(5)
    const [item , setItem] = useState(10)

    const loadingwidthcallback = useCallback(function loading (){
         return count * 2
    },[])

    return ( 
        <>
          <h1>usecallback</h1>
          <Usechild loading={loadingwidthcallback}/>
          <h1>{count}</h1>
          <h1>{item}</h1>
          <button onClick={() => setCount(count * 5)}>item btn</button>
          <button onClick={() => setItem(item * 5)}>item btn</button>

          <br />
          <br />
          <br />
          <br />
          <br />

        </>
     );
}
 
export default Usecallback;