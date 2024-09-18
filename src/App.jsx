import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState("Kalle")
  const [fruits, setFruits] = useState([]);
  const [darkMode, setDarkMode] = useState(true)

  let toggleMode = () => {
    setDarkMode(!darkMode);
  }

  let handleUsername = () => {
    let user = document.querySelector("#username").value;
    setUsername(user)
   }

  let addFruit = () => {
    //Lägg till en frukt i state-arrayen
    let newFruit = document.querySelector("#fruit").value;
    let fruitList = [...fruits, newFruit]
    setFruits(fruitList);

   }

  return (
    <div className={!darkMode ? "lightMode" : null}>
    <button onClick={toggleMode}>Toggle mode</button>
     <h1>React with inputs</h1>
     <h2>Welcome back, {username}</h2>
     <input type="text" id="username"/><button onClick={handleUsername}>Click me</button>
    
    <div>
     <input type="text" id="fruit"/><button onClick={addFruit}>Add fruit</button>
     </div>
     <div>
      <ul>
        {fruits?.map((fruit,i)=> <li key={i}>{fruit}</li>)}
      </ul>
     </div>
    </div>
  )
}

export default App
