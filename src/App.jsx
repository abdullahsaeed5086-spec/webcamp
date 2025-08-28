import { useState } from 'react'
import './App.css'
import './components/webcamp.css';
import WebCampPractice from './components/WebCampPractice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WebCampPractice/>
    </>
  )
}

export default App
