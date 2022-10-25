import React from 'react';

const Boton = (({quoteChange,colorArray,bcolor }) => {
    return (
        <button onClick={quoteChange} style={{border: `3px solid ${colorArray[bcolor]}`, color: `${colorArray[bcolor]}`} }>
            Change Quote
        </button>

    );
});

export default Boton;