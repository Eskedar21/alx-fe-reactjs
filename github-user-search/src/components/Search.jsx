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
      <h1 className='text-indigo-600    font-bold text-5xl '>GitHub Search App</h1>
      <form onSubmit={searchProfile} className='max-w-md mx-auto flex flex-col p-7 mt-5 gap-5 font-mono'>
        <input
          type="text"
          onChange={handleChange}
          value={searchTerm}
          placeholder="Enter Your GitHub Username"
          className=' block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
        />
        <input type="text" placeholder='Enter the location' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'/>
        <input type="text" placeholder='Enter minimum repositories' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2' />
        <button type="submit" className='block w-full rounded-md bg-indigo-600 py-1.5 text-white' >Search</button>
      </form>
       {isLoading && <p>Loading...</p>}
      {/* Display error if any */}
      {error && <p>{error}</p>}

      {/* Display user data if available */}
      {userData && (
        <div className='max-w-md mx-auto flex flex-col p-5 mt-3 gap-5 font-mono border-spacing-40'>
          <h2 className='font-mono text-indigo-600 text-3xl'>{userData.name}</h2>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            style={{ width: '100px', borderRadius: '50%' }}
            className='mx-auto'
          />
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className='block  w-full   rounded-md bg-indigo-600 py-1.5 text-white' >
              View Profile
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default Search;






