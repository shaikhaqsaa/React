import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./01Classcompointro";
import Classcompodemo from "./02Classcompodemo"
import Classcompoprops from "./03Classcompoprops";
import Maincard from "./04Maincard";
import Classcompostate from "./06Classcompostate";
import Conditionalrendering from "./07Conditionalrendering";
import Uncontrolledcomponent from "./08Uncontrolledcomponent";
import Controlledcomponent from "./09Controlledcomponent";
import Listandkeys from "./10Listandkeys";
import Classcompositionandinheritance from "./11Classcompositionandinheritance.jsx";
// import Maincounter from "./HOC/Maincounter";
// import Clickcounter from "./HOC/Clickcounter";
// import Classcompositionandinheritance from "./11Classcompositionandinheritance.JSX";
// import Classcompositionandinheritance from "./11Classcompositionandinheritance.jsx";

class Classroutes extends Component {
   render() {
      return (
         <Routes>
            <Route path="/" element={<Classcompomenu/>}>
               {/* <Route path="Classcompointro" element={<Classcompointro/>} /> */}
               <Route path="Classcompodemo" element={<Classcompodemo/>} />
               <Route path="Classcompoprops" element={<Classcompoprops/>} />
               <Route path="Maincard" element={<Maincard/>} />
               <Route path="Classcompostate" element={<Classcompostate/>} />
               <Route path="Conditionalrendering" element={<Conditionalrendering/>} />
               <Route path="Uncontrolledcomponent" element={<Uncontrolledcomponent/>} />
               <Route path="Controlledcomponent" element={<Controlledcomponent/>} />
               <Route path="Listandkeys" element={<Listandkeys/>} />
               <Route path="Classcompositionandinheritance" element={<Classcompositionandinheritance/>} />
               {/* <Route path="Clickcounter" element={<Clickcounter/>} /> */}
               {/* <Route path="Maincounter" element={<Maincounter/>} /> */}
               {/* <Route path="Classcompositionandinheritance" element={<Classcompositionandinheritance/>} /> */}
            </Route>
         </Routes>

      )
   }
}
export default Classroutes