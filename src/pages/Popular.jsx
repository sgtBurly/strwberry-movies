import React, { useContext } from "react";
import Grid from "../components/Grid";
import { MovieContext } from "../MovieContext.js";
import PaginationButton from "../components/PaginationButton";
import styles from "../styles/pages/popular.module.scss";
import buttonStyle from "../styles/components/paginationButton.module.scss";

const TopRated = () => {
	const { popularMovies, page, nextPage, prevPage, popularPreviousData } = useContext(MovieContext);

	return (
		<>
		{ popularMovies && (
			<article className={styles.popular}>
				<section className={styles.popular__content}>
					<div>
						<h1>
							Popular Movies
						</h1>
					</div>
					<Grid array={popularMovies} />
					<div className={buttonStyle.buttonWrapper}>
						<PaginationButton title = {"Previous page"} disabled = {page === 1} action = {prevPage}/>
						<PaginationButton title = {"Next page"} disabled = { popularPreviousData} action = {nextPage}/>
					</div>
				</section>
			</article>
		)}
		</>
	);
};

export default TopRated;
