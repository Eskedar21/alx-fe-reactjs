import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'

function App() {
  

  return (
    <>
     <Router>
       <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path= '/' element= {<ProtectedRoute/>}>
             <Route path='/profile/*' element= {<Profile/>}/>
          </Route>
          
          <Route path='/blog/:id' element= {<BlogPost/>}/>
       </Routes>
     </Router>
    </>
  )
}

export default App
