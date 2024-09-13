import React, {useState, useEffect} from 'react'
import RecipeList from '../data.json'

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(RecipeList);
    })
  return (
    <>
     <div>Recipe List</div>
     <div>
        {recipes.map((recipe) => {
            return (
              <div key={recipe.id}>
               <h2>{recipe.title}</h2>
                <p>{recipe.summary}</p>
                <img src="recipe" alt={recipe.title}/>
            </div>
            )
            
        })}
     </div>
    
    </>
   
  )
}

export default HomePage;