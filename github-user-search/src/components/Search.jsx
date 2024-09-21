import React, {useState} from 'react'
import fetchUserData from '../services/githubService';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserDate] = useState();
  const [error, setError] = useState(null); 

  const handleChange = (e) => {
    const newVal = e.target.value;
    setSearchTerm(newVal)
  }

  const searchProfile = async(e) => {
    e.preventDefault();
  const trimmedTerm = searchTerm.trim();
  if(trimmedTerm){
   try{
     const data = await fetchUserData(searchTerm);
     setUserDate(data);
     setError(null)
   } catch(err) {
        setError('User not found');
        setUserDate(null)
   }
  }else {
    alert('Please enter a valid username.');
  }

    
  }
  return (
    <>
      <h1>GitHub Search App</h1>
     <form onSubmit={searchProfile}>
        <input type="text" onChange={handleChange} value={searchTerm}  placeholder='Enter Your GitHub User Name' />
        <button type='submit'>Search</button>
     </form>
     {error && <p>{error}</p>} 
     {userData && (
       <div>
         <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt={userData.login} style={{ width: '100px', borderRadius: '50%' }} />
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
     )}
    
    
    </>
  )
}

export default Search;