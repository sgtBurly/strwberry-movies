import React from "react";
import { useMoviesById } from "../hooks/useMoviesById";
import CTA from "../components/CTA";
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import styles from "../styles/pages/movie-page.module.scss";
import "../styles/global/typography.scss";
import { useSimilarMovies } from "../hooks/useSimilarMovies";

// If the card klicked referenced "/details/Movie/:id" this page is rendered.
// It uses the id from the props (supplied from the card component)
// to fetch the selected movie using useMoviesById hook.
const MoviePage = () => {
	const { id } = useParams();
	const { data: movie, isSuccess: movieSuccess } = useMoviesById(id);
	const { data: similarMovies, isSuccess: similarSuccess } =
		useSimilarMovies(id);
	const imagePrefix = `https://image.tmdb.org/t/p/w500`;

	const actorList = movie?.credits.cast.map((person) => {
		// As there are multiple "known_for_department" options, and only actors are wanted,
		// unwanted departments are filtered out.

		if (person.known_for_department === "Acting") {
			return {
				type: "Actor",
				title: person.name,
				background: person.profile_path,
				id: person.id,
			};
		}
	});

	const similarMoviesList = similarMovies?.results.map((movie) => {
		return {
			type: "Movie",
			title: movie.title,
			background: movie.poster_path,
			id: movie.id,
		};
	});

	return (
		<>
			{movieSuccess && similarSuccess && (
				<section className={styles.moviePage}>
					<section className={styles.moviePage__content}>
						<article className={styles.moviePage__hero}>
								<img
									src={`${imagePrefix}/${movie.backdrop_path}`}
									alt={`${movie.title}`}
									className={styles.moviePage__image}
								/>
								<h1 className={`${styles.moviePage__title} heading heading--hero`}>{movie.title}</h1>
						</article>
						<section className={styles.moviePage__details}>
							<article className={styles.moviePage__info}>
								<nav className={styles.moviePage__genres}>
									{movie?.genres.map((genre, i) => {
										return (
											<CTA
												path={`/genre/${genre.id}/${genre.name}`}
												title={genre.name}
												key={i}
											/>
										);
									})}
								</nav>
								<section className={styles.moviePage__runtime}>
									<h3 className="heading heading--small">
										Runtime:{" "}
										<span className="text text--x-large">{movie?.runtime}</span>{" "}
										min
									</h3>
									<h3 className="heading heading--small">
										Score:{" "}
										<span
											className={`${styles.moviePage__score} text text--x-large`}
										>
											{movie?.vote_average}
										</span>
									</h3>
								</section>
							</article>
							<article className={styles.moviePage__overview}>
								<h3 className="heading heading--regular">Overview</h3>
								<p className="text text--regular">{movie?.overview}</p>
							</article>
						</section>
					</section>
					<section className={styles.moviePage__cast}>
						<h3 className="heading heading--large">Cast:</h3>
						<Carousel list={actorList} cardType={"Actor"} />
					</section>
					<section className={styles.moviePage__similarMovies}>
						<h3 className="heading heading--large">Similar movies:</h3>
						<Carousel list={similarMoviesList} cardType={"Movie"} />
					</section>
				</section>
			)}
		</>
	);
};

export default MoviePage;
