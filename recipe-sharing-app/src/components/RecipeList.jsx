import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar'; // Import the SearchBar component

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes(state)
  }));

  return (
    <div>
      <SearchBar /> {/* Display the search bar */}
      <div>
        {filteredRecipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          filteredRecipes.map(recipe => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
