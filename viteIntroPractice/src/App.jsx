import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div class ='logoMenu'>
      <a href ='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png' target='_blank'>
      <img src={logo} className="App-logo" alt="logo" />
      </a>

      <a href ='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png' target='_blank'>
      <img src={menu} className="App-menu" alt="menu" />
      </a>
      </div>
<div class='firstContainer'>
       <h1> Say hello to ReactJS</h1>
      
      <p>You will learn how to use
      <br></br>
      the most popular frontend library,
      <br></br>
       and become s super Ninja developer.</p>
      <button >Awesome!</button>
      </div>
      </div>
      
      <div class='card'>
      <div class= 'image1Container'>
      <img class='image1' src={icon1} className="App-icon1" alt="icon1" />
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs.</p>
      </div>

      <div class= 'image2Container'>
      <img class='image2' src={icon2} className="App-icon2" alt="icon2" />
      <h3>Components</h3>
      <p>Build encapsulated components that manage their state.</p>
      </div>

      <div class= 'image3Container'>
      <img class='image3' src={icon3} className="App-icon3" alt="icon3" />
      <h3>Single-Wat</h3>
      <p>A set of immutable values are passed to the component's.</p>
      </div>

      <div class= 'image4Container'>
      <img class='image4' src={icon4} className="App-icon4" alt="icon4" />
      <h3>JSX</h3>
      <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
</div>
</>

  );
}

export default App
