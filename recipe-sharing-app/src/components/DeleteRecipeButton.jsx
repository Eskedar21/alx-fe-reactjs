// DeleteRecipeButton.jsx
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = (event) => {
  
    deleteRecipe(recipeId);
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
