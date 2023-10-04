import React from "react";
import { Component } from "react";
import Childcompoforclass from "./Childcompoforclass"
import Classcompointro from "./01Classcompointro"
class Classcompositionandinheritance extends Component {

    render() {
        return (
            <>
                <h1>Classcompositionandinheritance</h1>
                <Childcompoforclass name="hrash"  >
                    {/* <h4>mitsh</h4>
                    <h5>sagar</h5> */}
                    <Classcompointro />
                </Childcompoforclass>

            </>
        );
    }
}

export default Classcompositionandinheritance;