import axios from 'axios';

const fetchUserData = (username) => {
  // GET request
  return axios.get(`https://api.github.com/users/${username}`)  // Use backticks for interpolation
    .then(response => {
      console.log(response.data); // Handle success
      return response.data; // Return the data for further use
    })
    .catch(error => {
      console.error('There was an error!', error); // Handle error
      throw error; // Rethrow the error if needed
    });
}

export default fetchUserData;
