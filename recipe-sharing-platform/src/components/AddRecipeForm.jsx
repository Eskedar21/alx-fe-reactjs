import { useState } from 'react';

function AddRecipeForm() {
  // Initial form data state
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });

  // Handle change for each input/textarea
  const handleChange = (event) => {
    const newObj = {...formData, [event.target.name]: event.target.value}
    setFormData(newObj)
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Reset the form data after submission
    setFormData({
      title: '',
      ingredients: '',
      steps: ''
    });
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
          required
        />

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />

        <label htmlFor="steps">Preparation Steps:</label>
        <textarea
          id="steps"
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddRecipeForm;
