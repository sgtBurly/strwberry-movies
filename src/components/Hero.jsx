import Style from "../styles/hero.module.css";

const Hero = ({ heroImage }) => {
  const imagePrefix = `https://image.tmdb.org/t/p/w500`;

  return (
    <div
      className={Style.hero}
      style={{
        backgroundImage: `url(${imagePrefix}${heroImage})`,
      }}
    >
      <h1>strwBerry Movies</h1>
    </div>
  );
};

export default Hero;
