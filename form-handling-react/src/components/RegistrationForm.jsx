import { useState } from "react";

const RegistrationForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", { username, email, password });
        
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
                    required 
                    onChange={(e) => setUsername(e.target.value)} 
                    style={{width: '300px'}}
                />
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    required 
                    onChange={(e) => setEmail(e.target.value)} 
                    style={{width: '300px'}}
                />
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    required 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{width: '300px'}}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm;
