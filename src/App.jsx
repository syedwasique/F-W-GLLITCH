import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home/Home'
import About from './About/About'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import Work from './Work/Work'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    
 <div className='app-container'>
<Home />
 </div>
  )
}

export default App
