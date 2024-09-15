import { useState } from "react";

import React from 'react'

function AddRecipeForm() {
  const [formData, setFormData] = useState({'title': '', 'ingredients': '', 'preparation': ''});

   const handleChange = (e) => {
     const {name, value} = e.target;
     setFormData(prevState=> ({...prevState, [name]: value}))
    
   }

   const handleSubmit = (e) => {
       e.preventDefault();
       console.log(formData);
       setFormData({
        title: '',
        ingredients: '',
        preparation: ''
      });
   }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Recipe Title:</label>
         <input type="text"  id="title"   name="title"  value={formData.title} onChange={handleChange}/>
         <label htmlFor="ingredients">Ingredients: </label>
         <textarea name="ingredients" id="ingredients" value={formData.ingredients} onChange={handleChange}></textarea>
         <label htmlFor="preparation">Preparation Steps: </label>
         <textarea name="preparation" id="preparation" value={formData.preparation} onChange={handleChange}></textarea>
         <button type="submit">Submit</button>
      </form>
    
    
    </>
  )
}

export default AddRecipeForm;




// import { useState } from 'react';

// const ControlledForm = () => {
//     const [formData, setFormData] = useState({ name: '', email: '' });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({ ...prevState, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//             />
//             <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//             />
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default ControlledForm;
