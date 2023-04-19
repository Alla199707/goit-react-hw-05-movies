import axios from 'axios';

export const API_KEY = '8a5752e4abef75f2eb883e6eab6ac34d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  api_key: `${API_KEY}`,
};

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get('trending/movie/day');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = async query => {
  try {
    const { data } = await axios.get('search/movie', {
      params: {
        query: query,
      },
    });
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getFullMovie = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCast = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`);
    return data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
