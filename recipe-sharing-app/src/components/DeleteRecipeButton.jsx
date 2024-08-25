import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Use useNavigate to redirect after deletion

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to the home page or another route after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
