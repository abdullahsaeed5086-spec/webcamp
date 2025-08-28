import { useState } from 'react'
import './App.css'
import './components/webcamp.css';
import WebCampPractice from './components/WebCampPractice'
import Childone from './components/Childone';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Childone/>
     {/* <WebCampPractice/> */}
    </>
  )
}

export default App
