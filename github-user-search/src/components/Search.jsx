import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null); // Corrected typo 
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null); 

  const handleChange = (e) => {
    const newVal = e.target.value;
    setSearchTerm(newVal);
  };

  const searchProfile = async (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();

    if (trimmedTerm) {
      try {
        const data = await fetchUserData(trimmedTerm); // Use the trimmed username
        setUserData(data);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        console.error(err); // Log the error for debugging
        setError('Looks like we cant find the user'); // Better error message
        setUserData(null);
        setIsLoading(false);
      }
    } else {
      alert('Please enter a valid username.');
    }
  };

  return (
    <>
      <h1>GitHub Search App</h1>
      <form onSubmit={searchProfile}>
        <input
          type="text"
          onChange={handleChange}
          value={searchTerm}
          placeholder="Enter Your GitHub Username"
        />
        <button type="submit">Search</button>
      </form>
       {isLoading && <p>Loading...</p>}
      {/* Display error if any */}
      {error && <p>{error}</p>}

      {/* Display user data if available */}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            style={{ width: '100px', borderRadius: '50%' }}
          />
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default Search;
