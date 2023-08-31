import axios from "axios";

const API_KEY = "ad56be962ca2e85ce8a362021dc93355";
const BASE_URL = "https://api.themoviedb.org/3/";
const baseUrlWithPath = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export default class MoviesService {
  static authenticate() {
    return axios.get(baseUrlWithPath("authentication"));
  }

  static getPopularMovies(params) {
    return axios.get(baseUrlWithPath("movie/popular"), {
      params,
    });
  }

  static getMovie(id) {
    if (!id) {
      return Promise.reject("id is required");
    }
    let url = baseUrlWithPath(`movie/${id}`);
    return axios.get(url);
  }

  static searchMoviesByQueryParams(params) {
    return axios.get(baseUrlWithPath("search/movie"), {
      params,
    });
  }
}
