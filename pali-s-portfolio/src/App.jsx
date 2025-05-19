import { useState } from 'react'
import questionme from './assets/images/hmmquestionmark.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <a href="www.linkedin.com/in/palishma-shakya-9a622529a">
          <img src={questionme} className="logo" alt="question me" />
        </a>
        <p>Under Construction</p>
    </>
  )
}

export default App
