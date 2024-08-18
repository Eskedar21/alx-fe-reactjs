import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Navbar from './Navbar'

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
