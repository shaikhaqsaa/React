import React from "react";
import { Component  } from "react";
import { Link,Outlet } from "react-router-dom";
// import Classcompointro from "./Classcompointro";

class Classcompomenu extends Component{
    render(){
        return (
            <>
              <ul>
                <li><Link to="Classcompointro"> Classcompointro</Link></li>
                <li><Link to="Classcompoprops"> Classcompoprops</Link></li>
                <li><Link to="Classcompostate"> Classcompostate</Link></li>
                <li><Link to="Classcompostatelife"> Classcompostatelife</Link></li>
                <li><Link to="ClassConditionrendering"> ClassConditionrendering</Link></li>
                <li><Link to="Classuncontrolledcompo"> Classuncontrolledcompo</Link></li>
                {/* <li><Link to="Classcontrolledcomponents"> Classcontrolledcomponents</Link></li> */}
                <li><Link to="Classlistkeys"> Classlistkeys</Link></li>
                <li><Link to="Stateliftingone"> Stateliftingone</Link></li>
                <li><Link to="Classcompositionandinheritance"> Classcompositionandinheritance</Link></li>
                <li><Link to="Classhoc"> Classhoc</Link></li>
                
              </ul>
              <Outlet></Outlet>
            </>
        )
    }
}
export default Classcompomenu