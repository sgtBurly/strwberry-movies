import React from "react";
import Style from "../styles/card.module.css";
import { Link } from "react-router-dom";
import "../index.css";

// This component takes background image, title (eg name of movie, name of actor), type of info to render (eg movie, actor)
const Card = ({ background, title, type, id }) => {
  const imagePrefix = `https://image.tmdb.org/t/p/w500`;

  return (
    <Link to={`/details/${type}/${id}`} className={Style.card}>
      <div
        className={Style.imageWrapper}
        style={{
          backgroundImage: `url(${imagePrefix}${background})`,
        }}
      ></div>
      <div className={Style.titleWrapper}>
        <h3 className={Style.title}>{title}</h3>
      </div>
    </Link>
  );
};

export default Card;
