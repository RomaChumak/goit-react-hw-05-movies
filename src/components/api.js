import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const API_KEY = '6cf2e6aedede4f67ddb5db14eaf096a6'

export async function fetchTopMovies() {
    const resp = await axios.get(`/trending/movie/week?api_key=${API_KEY}&language=en-US'`)
    return resp.data
}

export async function fetchMovieDetails(movieId) {
    const resp = await axios.get(`/movie/${Number(movieId)}?api_key=${API_KEY}&language=en-US`)
    return resp.data
}

export async function fetchMovies(query) {
    const resp = await axios.get( `/search/movie?api_key=${API_KEY}&query=${query}&include_adult=true&language=en-US`);
    return resp.data
}