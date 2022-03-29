import React from 'react';
import styles from "../styles/components/navbar.module.scss";
import CTA from './CTA';

const Navbar = () => {

  const navbarCtas = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Top Rated",
      path: "/top-rated-movies"
    },
    {
      title: "Popular",
      path: "/popular-movies"
    },
    {
      title: "genres",
      path: "/genre/:name/:id/"
    },
  ]

  return (
    <section className={styles.navbar}>
        {
          navbarCtas.map((cta, i) => {
            return (
                <CTA title={cta.title} path={cta.path} key={i}/>
            )
          })
        }
    </section>
  )
}

export default Navbar