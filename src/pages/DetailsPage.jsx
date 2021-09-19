import React from "react";
// import { useParams } from "react-router";
import ActorDetails from "../components/ActorDetails";
import MovieDetails from "../components/MovieDetails";
import Style from "../styles/details.module.css";
const DetailsPage = (props) => {
  const { id, type } = props.match.params;

  if (id && type === "Movies") {
    return <MovieDetails id={id} />;
  }

  if (id && type === "Actors") {
    return <ActorDetails id={id} />;
  }
};

export default DetailsPage;