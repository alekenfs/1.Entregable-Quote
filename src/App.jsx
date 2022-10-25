import { useState, } from 'react'
import './App.css'
import quotes from '../quotes.json'
import Boton from './Boton'
import QuoteBox from './QuoteBox'

function App() {
  const ramdomQuote = Math.floor(Math.random() * quotes.length - 1)

  const [index, setIndex] = useState(ramdomQuote)

  let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  const ramdomColor = Math.floor(Math.random() * colorArray.length - 1)
  const [bcolor, setBcolor] = useState(ramdomColor)
  document.body.style = `background: ${colorArray[bcolor]}`;



  const quoteChange = () => {

    const anotherramdomQuote = Math.floor(Math.random() * quotes.length)

    setIndex(anotherramdomQuote)

    const anotherramdomColor = Math.floor(Math.random() * colorArray.length)

    setBcolor(anotherramdomColor)
  }

  return (
    <main>
      <div className="box" style={{ background: "white" }}>

        <QuoteBox 
        quotes={quotes}
        index = {index}
        colorArray={colorArray}
        bcolor={bcolor}
        />

        <Boton
          quoteChange={quoteChange}
          bcolor={bcolor}
          colorArray={colorArray}

        />
      </div>
    </main>
  )
}

export default App
