import React from "react";
import GenreComponent from "../components/GenreComponent";
import Hero from "../components/Hero";
import Style from "../styles/home.module.css";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";

const Home = () => {
  return (
    <div className={Style.home}>
      <TopRated />
      <Popular />
      <GenreComponent />
      <Hero />
    </div>
  );
};

export default Home;
