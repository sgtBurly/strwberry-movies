import React from "react";
import Carousel from "../components/Carousel";
import GenreWrapper from "../components/GenreWrapper";
import Hero from "../components/Hero";
import { useGenres } from "../hooks/useGenres";
import { useIsFetching } from "react-query";
import CTA from "../components/CTA";
import styles from "../styles/pages/home.module.scss";
import { useFetchMovies } from "../hooks/useFetchMovies";
import useChangePage from "../hooks/useChangePage"


const Home = () => {
	// Fetching an array of genres.
	// Fetching the genres in a parent component allows me to send the genre as a prop to the
	// child, which in turn can make the request to the API (via a custom hook) for the current genre id.
	const { page } = useChangePage();

	const { data: genres, isSuccess } = useGenres();
	const { data: popular } = useFetchMovies("popular", page);

	const { data: topRated } = useFetchMovies(
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

	const isFetching = useIsFetching();

	return (
		<article className={styles.home}>
			<Hero />
			<section className={styles.home__content}>
				<CTA path={`/top-rated-movies`} title={"Top rated"} />
				{topRatedMovies && (
					<Carousel
						list={topRatedMovies}
						cardType={"Movie"}
						path={"/top-rated-movies"}
					/>
				)}
			</section>
			<section className={styles.home__content}>
				<CTA path={`/popular-movies`} title={"Popular"} />
				{popularMovies && (
					<Carousel
						list={popularMovies}
						cardType={"Movie"}
						path={"/popular-movies"}
					/>
				)}
			</section>
			{/* Mapping over the genres array, rendering a genreWrapper for the current genre**/}
			{isSuccess &&
				genres &&
				genres.genres.map((genre, i) => {
					return (
						<section className={styles.home__content}>
							<CTA
								path={`/genre/${genre.name}/${genre.id}`}
								title={genre.name}
							/>
							<GenreWrapper carousel genre={genre} key={i} />
						</section>
					);
				})}
		</article>
	);
};

export default Home;
