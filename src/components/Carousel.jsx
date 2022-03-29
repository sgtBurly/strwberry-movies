import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Card from "./Card";
import styles from "../styles/components/carousel.module.scss";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faBan,
	faArrowRight,
	faListUl,
} from "@fortawesome/free-solid-svg-icons";

export default function Carousel({ list, cardType, path }) {
	const [itemWidth, setItemWidth] = useState(null);
	//By using the useRef hook I can access the DOM and read the properties of the carousel__window and Card component
	const carouselRef = useRef(null);
	const cardRef = useRef(null);
	const [isAtEnd, setIsAtEnd] = useState(false);
	const [isAtStart, setIsAtStart] = useState(true);
	const history = useHistory();
	useEffect(() => {
		setItemWidth(cardRef.current?.clientWidth);
	}, []);

	const checkScrollPosition = () => {
		// The scrollLeft property will return a decimal value if the current system uses
		// display scaling. This will result in the following equation not matching up, so I
		// had to manipulate the value to get it to work. The math floor thing is not a very
		// good solution, because you could have a situation where the values fluctuate and the
		// Math method would knock the equation to the floor (pun intended). In this scenario
		// it works though, because the values in my carousel are constant.

		// Checking to see if the total width of the carousel__window element minus the scrolled area is equal to the visible area. If it is,
		// the carousel has reached the last item, and I can react to that. The arbitrary value of 100 is used as a bumper to switch "next" and
		// "show all" just before the end is reached.
		setIsAtEnd(
			Math.floor(
				carouselRef.current?.scrollWidth - carouselRef.current?.scrollLeft
			) <=
				carouselRef.current?.clientWidth + 100
		);
		// If the scrollLeft is at 0 it means it is currently at the very beginning of the carousel
		setIsAtStart(carouselRef.current?.scrollLeft === 0);
	};

	const showAllMovies = () => {
		history.push(`${path}`);
	};

	const prev = () => {
		//When using the "next" and "prev" buttons, the carousel scrolls the width of 2 cards
		if (!isAtStart) {
			carouselRef.current.scrollBy({
				left: -(itemWidth * 2),
				top: 0,
				behavior: "smooth",
			});
		}
	};

	const next = () => {
		if (
			Math.floor(
				carouselRef.current.scrollWidth - carouselRef.current.scrollLeft
			) !== carouselRef.current.clientWidth
		) {
			carouselRef.current.scrollBy({
				left: itemWidth * 2,
				top: 0,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className={styles.carousel}>
			<>
				<button
					className={styles.carousel__prevButton}
					onClick={() => prev()}
					disabled={isAtStart}
				>
					{isAtStart ? (
						<FontAwesomeIcon icon={faBan} />
					) : (
						<FontAwesomeIcon icon={faArrowLeft} />
					)}
				</button>
			</>
			<div
				className={styles.carousel__window}
				onScroll={() => checkScrollPosition()}
				ref={carouselRef}
			>
				{list.map((item, i) => {
					return (
						<Card
							ref={cardRef}
							key={i}
							title={item?.title}
							background={item?.background}
							year={item?.year}
							type={cardType}
							id={item?.id}
						/>
					);
				})}
			</div>
			<>
				{!isAtEnd && (
					<button
						className={styles.carousel__nextButton}
						onClick={() => next()}
					>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				)}
				{isAtEnd && cardType !== "Actor" && (
					<button
						className={styles.carousel__showAllButton}
						onClick={() => showAllMovies()}
					>
						<FontAwesomeIcon icon={faListUl} />
					</button>
				)}
			</>
		</div>
	);
}
