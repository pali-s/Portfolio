import { useState } from 'react'
import questionme from './assets/images/hmmquestionmark.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <a href="http://ghostwritergame.netlify.app">
          <img src={questionme} className="logo" alt="question me" />
        </a>
        <p>Under Construction</p>
    </>
  )
}

export default App
