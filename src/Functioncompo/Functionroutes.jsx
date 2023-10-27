import React from "react";
import { Routes, Route } from "react-router-dom";
import Functioncompointro from "./Functioncompointro";
import Functioncompomenu from "./Functioncompomenu";
import Usestate from "./01Usestate";
import Classstatecount from "./02Classstatecount";
import Functioncount from "./03Functioncount";
import Usercompoprops from "./04Usercompoprops";
import Layouteffect from "./05Layouteffect";
import Usememo from "./Usememo"
import Usecallback from "./Usecallback";
// import AccessAPI from "./06AccessAPI";
// import APIExmapleCompo from "./APIExmapleCompo";
import Api from "./Api";


const Functionroutes = () =>{
    return(
<Routes>
    <Route path="/" element={<Functioncompomenu/>}>
    <Route path="Functioncompointro" element={<Functioncompointro/>}/>
    <Route path="Usestate" element={<Usestate/>}/>
    <Route path="Usercompoprops" element={<Usercompoprops/>}/> 
        <Route path="Layouteffect" element={<Layouteffect/>}/>
        <Route path="Usememo" element={<Usememo/>}/>
        <Route path="Usecallback" element={<Usecallback/>}/>
        {/* <Route path="APIExmapleCompo" element={<APIExmapleCompo/>}/> */}
        <Route path="Api" element={<Api/>}/>
    </Route>
</Routes>

    )
}
export default Functionroutes
