import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  let query = `q=${username}`;

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data.items; // Return all the users
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchUserData;
