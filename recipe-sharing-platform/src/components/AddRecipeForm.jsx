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
    if (!steps) {validateErrors.steps = "Preparation Steps are required"} else if(ingredients.length < 2) {
        validateErrors.ingredients = "At least 2 ingredients are required"
    }

    // If there are validate errors, set the errors and prevent submission
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return; // Stop form submission if there are validate errors
    }else {
        alert('form submited sucessfully')
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
      <form onSubmit={handleSubmit} className='flex mx-auto my-12 flex-col  w-[500px] h-[600px] rounded-xl bg-gray-100 hover:bg-transparent shadow  p-10 focus:ring-1 focus:ring-green-700'>
        <label htmlFor="title" className='text-green-700 font-bold lg:text-2xl md:text-xl sm:text-lg p-1 border-lime-700'>Recipe Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className='rounded shadow h-10 p-5 text-green-700 focus:outline-none focus:ring-1 focus:ring-green-700  transition-colors duration-300 '
        />
        {/* Error message for title */}
        {errors.title && <p style={{ color: 'red', fontSize: '14px' }}>{errors.title}</p>}

        <label htmlFor="ingredients"  className='text-green-700 font-bold lg:text-2xl md:text-xl sm:text-lg p-1'>Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          className='rounded shadow h-36 p-5 text-green-700 focus:outline-none focus:ring-1 focus:ring-green-700  transition-colors duration-300'
        />
        {/* Error message for ingredients */}
        {errors.ingredients && <p style={{ color: 'red', fontSize: '14px' }}>{errors.ingredients}</p>}

        <label htmlFor="steps" className='text-green-700 font-bold lg:text-2xl md:text-xl sm:text-lg p-1'>Preparation Steps:</label>
        <textarea
          id="steps"
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          className='rounded shadow h-36 p-5 text-green-700 focus:outline-none focus:ring-1 focus:ring-green-700  transition-colors duration-300 '
        />
        {/* Error message for steps */}
        {errors.steps && <p style={{ color: 'red', fontSize: '14px' }}>{errors.steps}</p>}

        <button type="submit" className=' mx-auto mt-8 w-32 rounded-xl h-12  shadow-xl border-green-700 bg-transparent text-green-700 hover:bg-green-700 hover:text-white'>Submit</button>
      </form>
    </>
  );
}

export default AddRecipeForm;
