const axios = require('axios');

const httpClient = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  fetchMovies() {
    return httpClient.get('movies');
  },

  fetchMovieDetails(id) {
    return httpClient.get(`movies/${id}`);
  },

  fetchCinemas() {
    return httpClient.get('cinemas');
  },

  getUserByEmail(email, accessToken) {
    return httpClient.get(`users/email/${email}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  updateUser(user, accessToken) {
    return httpClient.post('users', user, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
