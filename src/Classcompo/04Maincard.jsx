import React from "react";
import { Component } from "react";
import Classcompodemo from "./02Classcompodemo";
import Card from "./05Card";

class Maincard extends Component{
    render(){
        return(
            <>
            <Classcompodemo data=" name of your page"/>
            <Card img="https://picsum.photos/id/237/200/300" title="hello data"/>
            <Card img="https://picsum.photos/id/257/200/300"/>
            <Card img="https://picsum.photos/id/277/200/300"/>
            </>
        )
    }
}
export default Maincard