import { useState } from "react";

const RegistrationForm = () => {

    const [formData, setFormData] = useState(
        {
            userName: '',
            email: '',
            password: ''
        }
    )

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevValue => ({...prevValue, [name]: value}))

    }

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log("Form submitted",formData);
       setFormData({userName: '', email: '', password: ''})
    }

  return (
    <div>
       <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
         <input type="text" name="userName" value={formData.userName}  required   onChange={handleChange} style={{width: '300px'}}/>
        <input type="emal" name="email" value={formData.email} required onChange={handleChange} style={{width: '300px'}}/>
         <input type="password" name="password" value={formData.password} required onChange={handleChange} style={{width: '300px'}}/>
         <button type="submit"> Submit </button>
       </form>
    </div>
  )
}

export default RegistrationForm;