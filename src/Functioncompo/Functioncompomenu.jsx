import React from "react";
import { Link, Outlet } from "react-router-dom";

const Functioncompomenu =()=>{
    return(
        <>
        <ul>
            <li><Link to="Functioncompointro">Function compo intro</Link></li>
            <li><Link to="Usestate">Usestate</Link></li>
            <li><Link to="Usercompoprops">usercompoprops</Link></li>
            <li><Link to="Layouteffect">Layout effect</Link></li>
            <li><Link to="Usememo">Use memo</Link></li>
            <li><Link to="Usecallback">Use callback</Link></li>
            {/* <li><Link to="APIExmapleCompo">APIExmapleCompo </Link></li> */}
            <li><Link to="Api">Api</Link></li>
        </ul>
        <Outlet></Outlet>
        </>
    )
}
export default Functioncompomenu