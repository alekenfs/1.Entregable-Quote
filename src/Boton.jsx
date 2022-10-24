import React from 'react';

const Boton = (({quoteChange}) => {
    return (
        <button onClick={quoteChange}>
            Change Quote
        </button>

    );
});

export default Boton;