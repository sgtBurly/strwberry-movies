import React from "react";
import Style from "../styles/moviesList.module.css";
import Card from "./Card";
import { useActorById } from "../hooks/useActorById";
import { useCreditsByActorId } from "../hooks/useCreditsByActorId";

const ActorDetails = ({ id }) => {
  const imagePrefix = `https://image.tmdb.org/t/p/w500`;

  const { data: actor, isSuccess: actorSuccess } = useActorById(id);
  const { data: credits, isSuccess: creditsSuccess } = useCreditsByActorId(id);

  return (
    <>
      {actorSuccess && creditsSuccess && (
        <div>
          {actor.profile_path && (
            <div
              className={Style.hero}
              style={{
                backgroundImage: `url(${imagePrefix}${actor.profile_path})`,
              }}
            ></div>
          )}
          <div>
            <h1>{actor && actor.name}</h1>
          </div>
          <h3>strwBerry actor score:</h3>
          <div>
            <h5>{actor && actor.popularity}</h5>
          </div>
          <div className={Style.listWrapper}>
            {credits &&
              credits.cast.map((movie, i) => {
                return (
                  <Card
                    key={i}
                    background={movie.poster_path}
                    title={movie.name}
                    type="Movies"
                    id={movie.id}
                  />
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default ActorDetails;
