import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  // Construct the query parameters based on the provided filters
  let query = `${username}`; // Start with the username as the main query

  // Append location to the query if provided
  if (location) {
    query += `+location:${location}`;
  }

  // Append minimum repositories to the query if provided
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    // Make the GET request to GitHub's Search API with the constructed query
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    
    // Return the list of users from the 'items' array in the response
    return response.data.items;
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    throw error; // Propagate the error to be handled by the calling component
  }
};

export default fetchUserData;
