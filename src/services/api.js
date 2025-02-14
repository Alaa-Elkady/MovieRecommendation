import axios from 'axios';

const API_KEY = 'fe39c088e1b5e1057541d1d9aec1ac62';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (page, genre) => {
  try {
    const genreParam = genre ? `&with_genres=${genre}` : '';
    const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}${genreParam}`);
    return response;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const searchMovies = async (query, page = 1) => {
  return axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    return response.data.genres; // Extract and return the genres array
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};

export const fetchMovieById = async (id) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};
export const fetchTrendingMovies = async (timeWindow = 'day') => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/${timeWindow}?api_key=${API_KEY}`);
    return response.data.results; // Returns the list of trending movies
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};
// https://api.themoviedb.org/3/discover/movie?api_key=fe39c088e1b5e1057541d1d9aec1ac62&page=1