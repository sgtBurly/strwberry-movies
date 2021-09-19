import React from "react";
import { useMoviesById } from "../hooks/useMoviesById";
import { useMovieCredits } from "../hooks/useMovieCredits";
import Style from "../styles/moviesList.module.css";
import Card from "./Card";

const MovieDetails = ({ id }) => {
  const imagePrefix = `https://image.tmdb.org/t/p/w500`;

  const { data: movie } = useMoviesById(id);
  const { data: credits } = useMovieCredits(id);

  return (
    <>
      <div>
        <h1>{movie && movie.title}</h1>
      </div>
      <div>
        <p>{movie && movie.overview}</p>
      </div>
      <div className={Style.listWrapper}>
        {credits &&
          credits.cast.map((person, i) => {
            console.log("image path: ", person.profile_path);
            return (
              <Card
                key={i}
                background={person.profile_path}
                title={person.name}
                type="Actors"
                id={person.id}
              />
            );
          })}
      </div>
    </>
  );
};

export default MovieDetails;