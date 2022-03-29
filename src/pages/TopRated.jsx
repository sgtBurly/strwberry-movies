import React, { useContext } from "react";
import Grid from "../components/Grid";
import { MovieContext } from "../MovieContext.js";
import PaginationButton from "../components/PaginationButton";
import styles from "../styles/pages/top-rated.module.scss";

const TopRated = () => {
	const { topRatedMovies, page, nextPage, prevPage, topRatedPreviousData } =
		useContext(MovieContext);

	return (
		<>
		{topRatedMovies && (
			<article className={styles.topRated}>
				<section className={styles.topRated__content}>
					<div>
						<h1>Top Rated Movies</h1>
					</div>
					<Grid array={topRatedMovies} />
					<PaginationButton
						title={"Previous page"}
						disabled={page === 1}
						action={prevPage}
					/>
					<PaginationButton
						title={"Next page"}
						disabled={topRatedPreviousData}
						action={nextPage}
					/>
				</section>
			</article>
		)}
	</>
	);
};

export default TopRated;
