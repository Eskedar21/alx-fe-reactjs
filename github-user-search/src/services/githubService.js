import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  // Construct the query parameters
  let query = `q=${username}`;

  // Append location if provided
  if (location) {
    query += `+location:${location}`;
  }

  // Append minimum repository count if provided
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    // Use the GitHub Search API with the constructed query
    const response = await axios.get(`https://api.github.com/search/users?${query}`);
    return response.data.items;  // GitHub returns search results in the 'items' array
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchUserData;
