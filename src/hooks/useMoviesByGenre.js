import { useQuery } from "react-query";
import { getMoviesByGenre } from "../MoviesAPI";

export const useMoviesByGenre = (genreId, page) => {
	return useQuery(["movie", genreId, page], () =>
		getMoviesByGenre(genreId, page)
	);
};
