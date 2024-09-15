import { useState } from 'react';

function AddRecipeForm() {
  // Initial form data state
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });
  const [errors, setErrors] = useState({}); // State for managing validate errors

  // Handle change for each input/textarea
  const handleChange = (event) => {
    const newRecipe ={...formData, [event.target.name]: event.target.value} 
    setFormData(newRecipe);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors before validate
    setErrors({});
    
    // Basic validate
    let validateErrors = {};
    const { title, ingredients, steps } = formData;

    if (!title) validateErrors.title = "Recipe Title is required";
    if (!ingredients) validateErrors.ingredients = "Ingredients are required";
    if (!steps) validateErrors.steps = "Preparation Steps are required";

    // If there are validate errors, set the errors and prevent submission
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return; // Stop form submission if there are validate errors
    }

    // Reset the form data after submission
    setFormData({
      title: '',
      ingredients: '',
      steps: ''
    });

    // Log form data to the console (or handle it however you like)
    console.log('Form Data:', formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Recipe Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {/* Error message for title */}
        {errors.title && <p style={{ color: 'red', fontSize: '14px' }}>{errors.title}</p>}

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
        />
        {/* Error message for ingredients */}
        {errors.ingredients && <p style={{ color: 'red', fontSize: '14px' }}>{errors.ingredients}</p>}

        <label htmlFor="steps">Preparation Steps:</label>
        <textarea
          id="steps"
          name="steps"
          value={formData.steps}
          onChange={handleChange}
        />
        {/* Error message for steps */}
        {errors.steps && <p style={{ color: 'red', fontSize: '14px' }}>{errors.steps}</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddRecipeForm;
