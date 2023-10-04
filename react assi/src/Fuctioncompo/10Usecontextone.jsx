import React from 'react';
import CompA from './CompA';
import { createContext } from 'react';
// import { create } from 'json-server';

const Fname = createContext()

const Usecontextone = () => {
    return (
        <>
            <Fname.Provider value="munil">
                <CompA />
            </Fname.Provider>
        </>
    );
}

export default Usecontextone;
export {Fname}