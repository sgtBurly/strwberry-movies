import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/navbar.module.scss";
import CTA from "./CTA";
import strawberryLogo from "../assets/icons/strawberry.png";
import { useWindowSize } from "../hooks/useWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const tabletOrAbove = useWindowSize().width >= 435;
	const toggleMenu = () => setShowMenu(!showMenu);

	const navbarCtas = [
		{
			title: "Home",
			path: "/",
		},
		{
			title: "Top Rated",
			path: "/top-rated-movies",
		},
		{
			title: "Popular",
			path: "/popular-movies",
		},
	];

	return (
		<nav className={styles.navbar}>
			<figure className={styles.navbar__icon}>
				<Link to="/">
					<img src={strawberryLogo} />
					<h6>strwbry MDB</h6>
				</Link>
			</figure>
			{tabletOrAbove && (
				<section className={styles.navbar__buttonGroup}>
					{navbarCtas.map((cta, i) => {
						return <CTA title={cta.title} path={cta.path} key={i} />;
					})}
				</section>
			)}
			{!tabletOrAbove && (
				<section className={styles.burgerMenu}>
					<button onClick={toggleMenu}>
						{showMenu ? (
							<FontAwesomeIcon icon={faTimes} className="fa-lg" />
						) : (
							<FontAwesomeIcon icon={faBars} className="fa-lg" />
						)}
					</button>
          {!tabletOrAbove && showMenu && (
            <section className={styles.navbar__burgerDropdown}>
              {navbarCtas.map((cta, i) => {
                return <CTA title={cta.title} path={cta.path} key={i} />;
              })}
            </section>
          )}
				</section>
			)}
		</nav>
	);
};

export default Navbar;
