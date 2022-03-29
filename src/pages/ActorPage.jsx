import React from "react";
import { useActorById } from "../hooks/useActorById";
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import styles from "../styles/pages/actor-page.module.scss";
import "../styles/global/typography.scss";

// If the card klicked referenced "/details/Actor/:id" this page is rendered.
// It uses the id from the props (supplied from the card component) to fetch the selected actor using useActorById hook.
const ActorPage = () => {
	const { id } = useParams();
	const { data: actor, isSuccess: actorSuccess } = useActorById(id);
	const imagePrefix = `https://image.tmdb.org/t/p/w500`;
	console.log("actor in page: ", actor);
	const movieList = actor?.credits.cast.map((movie, i) => {
		return {
			type: "Movie",
			title: movie.title,
			background: movie.poster_path,
			id: movie.id,
		};
	});
	
	return (
		<section className={styles.actorPage}>
			{actorSuccess && (
				<section className={styles.actorPage__content}>
					<article className={styles.actorPage__hero}>
						<img
							src={`${imagePrefix}/${actor.profile_path}`}
							alt={`${actor.name}`}
							className={styles.actorPage__image}
						/>
						<section className={styles.actorPage__details}>
							<section className={styles.actorPage__name}>
								{actor.name && (
										<h2 className="heading heading--large">{actor.name}</h2>
								)}
							</section>
							<section className={styles.actorPage__birth}>
								{actor.birthday && actor.place_of_birth && (
									<>
										<p className="text text--small">
											Born, {actor?.birthday} 
										</p>
										<p className="text text--small">
										{actor?.place_of_birth}
										</p>
									</>
								)}
							</section>
						</section>
					</article>
					<article className={styles.actorPage__about}>
						<h3 className="heading heading--regular">About</h3>
						{actor.biography && <p className="text text--regular">{actor?.biography}</p>}
					</article>
					<h3 className="heading heading--regular">Appears in:</h3>
					<Carousel list={movieList} cardType={"Movie"} />
				</section>
			)}
		</section>
	);
};

export default ActorPage;
