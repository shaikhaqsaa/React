import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./01Classcompointro";
import Classcompoprops from "./03Classcompoprops";
import Classcompostate  from "./04Classcompostate";
import Classcompostatelife from "./05Classcompostatelife";
import ClassConditionrendering from "./06ClassConditionrendering";
import Classuncontrolledcompo from "./07Classuncontrolledcompo";
// import Classcontrolledcomponents from "./08Classcontrolledcomponents ";
import Classlistkeys from "./09Classlistkeys";
// import Classcompositionandinheritance from "./10Classcompositionandinheritance";
import Stateliftingone from "./Statelifting/Stateliftingone";
import Classcompositionandinheritance from "./10Classcompositionandinheritance";
import Classhoc from "./HOC/Classhoc";




class Classcomproutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/"  element={<Classcompomenu />}>
                    <Route path="Classcompointro"  element={<Classcompointro/>}/>
                    <Route path="Classcompoprops"  element={<Classcompoprops/>}/>
                    <Route path="Classcompostate"  element={<Classcompostate/>}/>
                    <Route path="Classcompostatelife"  element={<Classcompostatelife/>}/>
                    <Route path="ClassConditionrendering"  element={<ClassConditionrendering/>}/>
                    <Route path="Classuncontrolledcompo"  element={<Classuncontrolledcompo/>}/>
                    {/* <Route path="Classcontrolledcomponents"  element={<Classcontrolledcomponents/>}/> */}
                    <Route path="Classlistkeys"  element={<Classlistkeys/>}/>
                    <Route path="Stateliftingone"  element={<Stateliftingone/>}/>
                    <Route path="Classcompositionandinheritance"  element={<Classcompositionandinheritance/>}/>
                    <Route path="Classhoc"  element={<Classhoc/>}/>
                    
                   
                </Route>
            </Routes>
        )

    }

}
export default Classcomproutes;