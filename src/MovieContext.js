import { createContext } from "react";
import { useFetchMovies } from "./hooks/useFetchMovies";
import useChangePage from "./hooks/useChangePage"
import { useGenres } from "./hooks/useGenres";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
	const { page, nextPage, prevPage } = useChangePage();

	const { data: genres } = useGenres()
	const { data: popular, isPreviousData: popularPreviousData } = useFetchMovies("popular", page);

	const { data: topRated, isPreviousData: topRatedPreviousData } = useFetchMovies(
		"top_rated",
		page
	);

	const popularMovies = popular?.results.map((movie, i) => {
		return {
				title: movie.title,
				background: movie.poster_path,
				id: movie.id,
			}
	})

	const topRatedMovies = topRated?.results.map((movie) => {
		return {
				title: movie.title,
				background: movie.poster_path,
				id: movie.id,
			}
	})

	const values = {
		topRatedMovies,
		popularMovies,
		popularPreviousData,
		topRatedPreviousData,
		genres,
		page,
		nextPage,
		prevPage
	};

	return (
		<MovieContext.Provider value={values}>
			{props.children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;
