import React, {forwardRef} from "react";
import styles from "../styles/components/card.module.scss";
import { Link } from "react-router-dom";

// This component takes background image, title (eg name of movie, name of actor), type of content (eg movie, actor) and renders  
// this information in the format of a card. The component uses the forwardRef method which enables me to reference the DOM element
// in the parent components as needed.
const Card = forwardRef(({ background, title, type, id }, ref) => {
  const imagePrefix = `https://image.tmdb.org/t/p/w500`;

  return (
    <Link to={`/details/${type}/${id}`} className={styles.card}
      ref={ref}
    >
      <figure
        className={styles.card__thumb}
      >
        <img 
          className={styles.card__image} 
          src={`${imagePrefix}${background}`} 
          alt={`"${title}" poster`} 
        />
        <figcaption className={styles.card__caption}>
          <h4>{title}</h4>
        </figcaption>
      </figure>
    </Link>
  );
});

export default Card;
