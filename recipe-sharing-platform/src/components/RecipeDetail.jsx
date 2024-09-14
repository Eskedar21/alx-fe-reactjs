import { useParams } from 'react-router-dom';
import Recipes from "../data.json";

function RecipeDetail() {
  const { id } = useParams(); // Extract the 'id' from the URL
  const recipe = Recipes.find((recipe) => recipe.id === parseInt(id)); // Find the recipe with the matching id

  if (!recipe) {
    return <h2 className="text-center text-red-600">Recipe not found</h2>; // Display message if no recipe is found
  }

  return (
    <div className="text-center p-10">
      <h2 className="text-green-700 font-bold text-3xl my-4">{recipe.title}</h2>
      <p className="text-green-700 py-4">{recipe.summary}</p>
      <img 
        className="mx-auto my-8 rounded-3xl w-64 hover:scale-110 hover:opacity-80" 
        src="https://plus.unsplash.com/premium_photo-1705687056564-fe42fc24c359?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt={recipe.title}
      />
    </div>
  );
}

export default RecipeDetail;
