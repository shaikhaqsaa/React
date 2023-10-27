import React from 'react';
import Navbar from './Navbar';
import { createBrowserRouter } from 'react-router-dom';
import About from './About';
import { lazy } from 'react';
import Contact from "./Contact"
import Home from "./Home"
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Example from './Examples';
import Functionroutes from './Functioncompo/Functionroutes';
// const About = lazy(() =>import("./About"))
const Classroutes = lazy(() => import("./Classcompo/Classroutes"))
const Functionalcomporoutes = React.lazy(()=>import("./Functioncompo/Functionroutes"))

const Mainrouter = createBrowserRouter([
        {
            path: "/",
            element: <><Navbar /><Home /></>
        },
        {
            path: "/about",
            element: <>
            <Navbar />
                {/* <Suspense fallback="Loading"> */}
                    <About />
                {/* </Suspense> */}
            </>
        },
        {
            path: "/contact",
            element: <><Navbar /><Contact /></>
        },
        {
            path: "/example",
            element: <><Navbar /><Example /></>,
            children: [

                {
                    path : "Classcompo/*",
                    element : <Suspense fallback={<h2>Loading...</h2>}><Classroutes/></Suspense>
                },
                {
                    path : "Functioncompo/*",
                    element : <Suspense fallback={<h2>loding.....</h2>}><Functionroutes/></Suspense>
                }
            ]
        }


    ]);
export default Mainrouter