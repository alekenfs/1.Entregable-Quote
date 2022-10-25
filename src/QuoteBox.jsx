import React from 'react';

const QuoteBox = (({quotes, index, colorArray, bcolor}) => {
    return (
        <div>
        <h1 style={{ color: `${colorArray[bcolor]}`}}>   {quotes[index].quote}</h1>
      <h2 style={{ color: `${colorArray[bcolor]}`}}> {quotes[index].author} </h2>
      </div>
    );
});

export default QuoteBox;