import React, {useState} from 'react'
import fetchUserData from '../services/githubService';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const newVal = e.target.value;
    setSearchTerm(newVal)
  }

  const searchProfile = (e) => {
    e.preventDefault();
  const trimmedTerm = searchTerm.trim();
  if(trimmedTerm){
    fetchUserData(searchTerm);
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
    
    
    </>
  )
}

export default Search;