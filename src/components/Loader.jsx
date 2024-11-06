/* import React from 'react'

const Loader = () => {
    return (
        <div className='flex justify-center items-center '>
            <h1 className='absolute z-100 ' >Loader...</h1>

        </div>
    )
}

export default Loader  */


// components/Loader.js
import React from 'react';
import "../index.css"


const Loader = () => {
    return (
        <div className="absolute z-100 flex gap-4 justify-center items-center h-full">
            <div className="loader"></div>
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;