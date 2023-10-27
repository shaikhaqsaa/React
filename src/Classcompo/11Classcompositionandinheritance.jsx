import React from "react";
import { Component } from "react";
import Listandkeys from "./10Listandkeys";
import Uncontrolledcomponents from "./08Uncontrolledcomponent";
class Classcompositionandinheritance extends Component{
    render(){
        let data = "aqsa"
        return(
            <>
            <h1>Class composition inheritance</h1>
            <Listandkeys name={data}>
                <h1>hello data</h1>
                <Uncontrolledcomponents/>
            </Listandkeys>
            </>
        )
    }
}
export default Classcompositionandinheritance