import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipes from '../data.json'; // Assuming the JSON file is in the root or appropriate folder

function RecipeDetail() {
  const { id } = useParams(); // Extracting the recipe ID from the URL
  const [recipe, setRecipe] = useState(null); // State to store the recipe data

  // Fetch recipe based on ID
  useEffect(() => {
    const selectedRecipe = Recipes.find((recipe) => recipe.id === parseInt(id)); // Find recipe by ID
    setRecipe(selectedRecipe); // Set the recipe data
  }, [id]);

  // If no recipe found, display an error message
  if (!recipe) {
    return <h2 className="text-center text-red-600">Recipe not found</h2>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-auto rounded-lg shadow-md mb-6"
      />
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">Ingredients</h3>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-lg text-gray-700">{ingredient}</li>
        ))}
      </ul>
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">Instructions</h3>
      <ol className="list-decimal list-inside">
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className="text-lg text-gray-700 mb-2">{instruction}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
