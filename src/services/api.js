import axios from 'axios';

const API_KEY = 'fe39c088e1b5e1057541d1d9aec1ac62';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (page = 1) => {
  return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
};

export const searchMovies = async (query) => {
  return axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
};

export const fetchGenres = async () => {
  return axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
};
export const fetchMovieById = async (id) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};