import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import './App.css'

function App() {
  

  return (
    <>
     <Router>
       <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/profile/*' element= {<Profile/>}/>
       </Routes>
     </Router>
    </>
  )
}

export default App
