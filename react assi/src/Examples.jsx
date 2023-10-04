import React from "react";
import { Link,Outlet } from "react-router-dom";

const Example = () => {
    return (  
        <>
         <div className='container mt-3'>
            <div className="row">
                <div className="col-6">
                    <h3>
                        <Link to="/Examples/Classcompo">Class Component</Link>
                    </h3>

                </div>
                <div className="col-6">
                    <h3><Link to="/Examples/Fuctioncompo">Functional Component</Link></h3>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-md-12">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Example;
