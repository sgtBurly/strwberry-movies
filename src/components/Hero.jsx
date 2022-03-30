import React, { useEffect, useState } from "react";
import styles from "../styles/components/hero.module.scss";
import { useNowPlaying } from "../hooks/useNowPlaying";

const Hero = () => {
	const imagePrefix = `https://image.tmdb.org/t/p/w500`;
	const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0
	const { data: nowPlaying } = useNowPlaying();

	const images = nowPlaying?.results.map((movie) => movie.backdrop_path);

	const slideRight = () => {
		setIndex((index + 1) % images?.length); // increases index by 1
	};

	useEffect(() => {
		const sliderinterval = setInterval(() => slideRight(), 4000);
		return () => clearInterval(sliderinterval);
	});

	return (
		<>
			{images && (
				<header className={`${styles.hero} ${styles.hero}`}>
					<img
						className={styles.hero__image}
						src={`${imagePrefix}${images[index]}`}
						alt={` poster`}
					/>
				</header>
			)}
		</>
	);
};

export default Hero;
