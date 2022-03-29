import styles from "../styles/pages/genre-page.module.scss";
import useChangePage from "../hooks/useChangePage";
import { useMoviesByGenre } from "../hooks/useMoviesByGenre";
import {  useParams } from "react-router-dom";
import Grid from "../components/Grid";
import PaginationButton from "../components/PaginationButton";

const GenreWrapper = () => {
	// This component is rendered in it's parent component for each genre available through TMDB. This is needed because
	// react hooks need to be called at top level and can't be nested in a loop (I tried, oh have I tried). So the looping
	// occurs in the parent component, this child component only needs to deal with one genre, and all is happy and well.
	const { page, nextPage, prevPage } = useChangePage();

  const { id } = useParams()
	const { data, isPreviousData, isSuccess } = useMoviesByGenre(
		id,
		page
	);

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
					<article className={styles.genrePage}>
						<section className={styles.genrePage__content}>
							<Grid array={movies} />
							<PaginationButton
								title={"Precious page"}
								disabled={page === 1}
								action={prevPage}
							/>
							<PaginationButton
								title={"Next page"}
								disabled={isPreviousData}
								action={nextPage}
							/>
						</section>
					</article>
				</>
			)}
		</>
	);
};

export default GenreWrapper;
