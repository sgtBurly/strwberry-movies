import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const api_key = `api_key=247fb190ba44f15d155e17f5c50a3d42`;
const appendCredits = "append_to_response=credits";

const get = async (endpoint) => {
	const res = await axios.get(endpoint);
	const data = res.data;
	return data;
};

/** Movie related fetches */
export const getAllGenres = async () => {
	return await get(`genre/movie/list?${api_key}`);
};

export const getNowPlaying = async () => {
	return await get(`/movie/now_playing?${api_key}`);
};

export const getMoviesByGenre = async (genreId, page) => {
	return await get(
		`discover/movie?${api_key}&${page}&with_genres=${genreId}&page=${page}`
	);
};

export const getMovieById = async (id) => {
	//Making sure the id param is a number and not a string
	const movieId = parseInt(id);
	return await get(`movie/${movieId}?${api_key}&${appendCredits}`);
};

export const getRecommendedMovies = async (id) => {
	//Making sure the id param is a number and not a string
	const movieId = parseInt(id);
	return await get(`/movie/${movieId}/recommendations?${api_key}`);
};

export const getSimilarMovies = async (id) => {
	//Making sure the id param is a number and not a string
	const movieId = parseInt(id);
	return await get(`/movie/${movieId}/similar?${api_key}`);
};

export const getMovieList = async (listType, page) => {
	//The possible listTypes are: popular, top_rated and latest
	return await get(`/movie/${listType}?${api_key}&page=${page}`);
};

/** Actor related fetches */

export const getActorById = async (id) => {
	//Making sure the id param is a number and not a string
	const actorId = parseInt(id);
	return await get(`/person/${actorId}?${api_key}&${appendCredits}`);
};
