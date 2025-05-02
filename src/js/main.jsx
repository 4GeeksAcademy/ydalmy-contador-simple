import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/SecondsCounter';

let counter = 0;
setInterval(() => {
  const one = Math.floor(counter / 1);
  const two = Math.floor(counter / 10);
  const three = Math.floor(counter / 100);
  const four = Math.floor(counter / 1000);
  const five = Math.floor(counter / 10000);
  const six = Math.floor(counter / 100000);
  counter++;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />
    </React.StrictMode>,
  )
}, 1000);

