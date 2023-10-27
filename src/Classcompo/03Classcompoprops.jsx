import React from "react";
import { Component } from "react";
import Classcompointro from "./01Classcompointro";
import Classcompodemo from "./02Classcompodemo";
// import Classcompomenu from "./Classcompomenu";

class Classcompoprops extends Component{
    render() { 
        // let name = "lalit"
        let user = {
            name : "aqsa shaikh",
            age : 25,
            location : "ahmedabad"
        }

        return (
            <>
            <h1>my Props</h1>    
            <Classcompointro user={user}/>
            <Classcompodemo/>

            </>
        );
    }
}
 
export default Classcompoprops