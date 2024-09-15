import React, {useState, useEffect} from 'react'
import RecipeList from '../data.json';
import { Link } from 'react-router-dom';
import AddRecipeForm from './AddRecipeForm';

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(RecipeList);
    })
  return (
    <>
     <h1 className='text-center my-20 text-green-800 font-bold lg:text-7xl sm:text-3xl md:text-4xl'>Wellcome to Recipe World!</h1>
     <div className='lg:grid lg:grid-cols-3  font-mono  md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 md:m-20'>
        {recipes.map((recipe) => {
            return (
              <Link to={`/recipe/${recipe.id}`} key={recipe.id} >
                <div className='rounded-xl shadow w-96 h-64 md:h-72 sm:h-80 bg-gray-100 hover:bg-transparent  text-center p-7 mx-auto my-20 gap-1 sm:m-10 md:m-10'>
                    <h2 className=' text-green-700 font-bold lg:text-2xl md:text-xl sm:text-lg' >{recipe.title}</h2>
                    <p className='text-green-700 py-4 lg:text-base md:text-sm sm:text-xs'>{recipe.summary}</p>
                     <img  className=' px-auto hover:scale-110 hover:opacity-80  mx-auto w-64 rounded-3xl' src="https://plus.unsplash.com/premium_photo-1705687056564-fe42fc24c359?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={recipe.title}/>
                </div>
              
              </Link>
              
            )
            
        })}
        <Link to="/add-recipe"><button className='rounded-xl bg-gray-100 text-green-700 w-48 p-2 hover:bg-green-700 hover:text-white mx-auto my-20 container'>Add Recipe</button></Link>
     </div>
     
    </>
   
  )
}

export default HomePage;