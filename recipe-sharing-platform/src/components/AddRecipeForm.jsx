import { useRef } from "react";

import React from 'react'

function AddRecipeForm() {
   const titleRef = useRef();
   const ingredientsRef = useRef();
   const preparationRef = useRef();


   const handleSubmit = (e) => {
       e.preventDefault();
       console.log('Recipe Title:',titleRef.current.value);
       console.log('Ingredients:',ingredientsRef.current.value);
       console.log('Preparation:',preparationRef.current.value);
   }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Recipe Title:</label>
         <input type="text"  id="title"   name="title"   ref={titleRef} />
         <label htmlFor="ingredients">Ingredients: </label>
         <textarea name="ingredients" id="ingredients" ref={ingredientsRef}></textarea>
         <label htmlFor="preparation">Preparation Steps: </label>
         <textarea name="preparation" id="preparation" ref={preparationRef}></textarea>
         <button type="submit">Submit</button>
      </form>
    
    
    </>
  )
}

export default AddRecipeForm;





