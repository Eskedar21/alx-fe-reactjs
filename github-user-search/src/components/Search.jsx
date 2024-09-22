import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState([]);
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleMinReposChange = (e) => setMinRepos(e.target.value);

  const searchProfile = async (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();

    if (trimmedTerm) {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchUserData(trimmedTerm, location, minRepos);
        setUserData(data); // Now this is an array
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError('Looks like we can’t find the user.');
        setUserData([]);
        setIsLoading(false);
      }
    } else {
      alert('Please enter a valid username.');
    }
  };

  return (
    <>
      <h1 className="text-indigo-600 font-bold text-5xl">GitHub User Search</h1>
      <form onSubmit={searchProfile} className="max-w-md mx-auto flex flex-col p-7 mt-5 gap-5 font-mono">
        <input
          type="text"
          onChange={handleSearchChange}
          value={searchTerm}
          placeholder="GitHub Username"
          className="block w-full rounded-md p-2 shadow-sm ring-1 ring-inset ring-gray-300"
        />
        <input
          type="text"
          onChange={handleLocationChange}
          value={location}
          placeholder="Location (e.g., Ethiopia)"
          className="block w-full rounded-md p-2 shadow-sm ring-1 ring-inset ring-gray-300"
        />
        <input
          type="number"
          onChange={handleMinReposChange}
          value={minRepos}
          placeholder="Minimum Repositories (e.g., 10)"
          className="block w-full rounded-md p-2 shadow-sm ring-1 ring-inset ring-gray-300"
        />
        <button type="submit" className="block w-full bg-indigo-600 text-white p-2 rounded-md">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Use .map() to display multiple users */}
      {userData.length > 0 && (
        <div className="mt-5">
          {userData.map((user) => (
            <div key={user.id} className="p-3 border border-gray-300 rounded-md my-3">
              <h2 className="font-mono text-indigo-600 text-3xl">{user.login}</h2>
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <p className="font-mono text-indigo-600">Location: {user.location || 'Not Available'}</p>
              <p className="font-mono text-indigo-600">Public Repositories: {user.public_repos ||  'Not Available'}</p>
              <p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Full Profile
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
