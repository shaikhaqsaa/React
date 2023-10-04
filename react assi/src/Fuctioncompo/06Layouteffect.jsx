import React from 'react';
import { useEffect,useLayoutEffect ,useState} from 'react';
const Layouteffect = () => {

    const [text , setText] = useState("code start....")
    const [loading , setLoading] = useState(true)

    useLayoutEffect(()=>{
        if(!loading){
            setText("code welcome")
        }
        else{
            setText("code start")
        }
    },[loading])
    // useEffect(()=>{
    //     if(!loading){
    //         setText("code welcome")
    //     }
    //     else{
    //         setText("code start...")
    //     }
    // },[loading])

   
    return ( 
        <>
          <h1>uselayouteffect</h1>
          <h2>{text}</h2>
        </>
     );
}
 
export default Layouteffect;
