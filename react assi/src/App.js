// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
// import{
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBBtn,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBCollapse,
// }
// from 'mdb-react-ui-kit';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route}from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact"

function App() {
  const[showBasic, setShowBasic] = useState(false);
  return (
<BrowserRouter>
<Routes>
  <Route path="/home" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
</BrowserRouter>


  )
}

export default App;
