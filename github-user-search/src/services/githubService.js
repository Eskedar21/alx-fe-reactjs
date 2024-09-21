import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    console.log(response.data); // Handle success
    return response.data; // Return the data for further use
  } catch (error) {
    console.error('There was an error!', error); // Handle error
    throw error; // Rethrow the error if needed
  }
}

export default fetchUserData;
