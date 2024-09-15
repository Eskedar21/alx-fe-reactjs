import AddRecipeForm from "./components/AddRecipeForm";
import HomePage from "./components/HomePage"
import RecipeDetail from './components/RecipeDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <>  
    <AddRecipeForm/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        {/* <Route path="//add-recipe" element={<AddRecipeForm/>} />
          */}
      </Routes>
   </Router>
    </>
  )
}

export default App
