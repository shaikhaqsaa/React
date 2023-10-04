import React from 'react';
import { Fname } from './10Usecontextone';

const CompC = () => {
    return (
        <>

                <h1>Usecontextone</h1>
            <Fname.Consumer>
            {
                    (rohan) => {
                    return  <h1>Hello {rohan}</h1>
                    }
            }
            </Fname.Consumer>



        </>
    );

}

export default CompC;