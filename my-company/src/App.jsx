import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
    
      <Router>
         <Navbar/> 
           <Routes>
              <Route path='/'  element= { < Home />}/>
              <Route path='/about'  element= { < About />}/>
              <Route path='/contact'  element= { < Contact />}/>
              <Route path='/services'  element= { < Services />}/>
           </Routes>
      </Router></>
       
  )
}

export default App
