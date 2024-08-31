import { useState } from "react";

const RegistrationForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", { username, email, password });
        
        // Reset errors
        setErrors({});

        // Basic validation
        let validationErrors = {};
        if (!username) validationErrors.username = "Username is required";
        if (!email) validationErrors.email = "Email is required";
        if (!password) validationErrors.password = "Password is required";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // Stop submission if there are validation errors
        }

        // Reset form fields
        setUsername('');
        setEmail('');
        setPassword('');
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <input 
                    type="text" 
                    name="username" 
                    value={username} 
                
                    onChange={(e) => setUsername(e.target.value)} 
                    style={{width: '300px'}}
                />
                 {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                 
                    onChange={(e) => setEmail(e.target.value)} 
                    style={{width: '300px'}}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                   
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{width: '300px'}}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm;
