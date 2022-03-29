import "../styles/components/grid.module.scss";
import useChangePage from "../hooks/useChangePage";
import { useMoviesByGenre } from "../hooks/useMoviesByGenre";
import Carousel from "./Carousel";

const GenreWrapper = ({ genre }) => {
	// This component is rendered in it's parent component for each genre available through TMDB. This is needed because
	// react hooks need to be called at top level and can't be nested in a loop (I tried, oh have I tried). So the looping
	// occurs in the parent component, this child component only needs to deal with one genre, and all is happy and well.
	const { page } = useChangePage();

	const { data, isSuccess } = useMoviesByGenre(genre.id, page);

	const movies = data?.results.map((movie) => {
		return {
			title: movie.title,
			background: movie.poster_path,
			id: movie.id,
		};
	});

	return (
		<>
			{movies && isSuccess && (
				<>
						<Carousel
							list={movies}
							cardType={"Movie"}
							path={`/genre/${genre.name}/${genre.id}/`}
						/>
				</>
			)}
		</>
	);
};

export default GenreWrapper;
