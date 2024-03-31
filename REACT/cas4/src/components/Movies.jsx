import React from "react";
import PropTypes from "prop-types";

export const Movies = ({ listaNaFilmovi }) => {
  console.log(listaNaFilmovi);
  return (
    <div id="movies">
      {listaNaFilmovi.map((film, i) => {
        return (
          <div key={i}>
            <h3>
              <span>Title:</span> {film.name}
            </h3>
            <p>
              <span>Release Date:</span> {film.releaseDate}
            </p>
            <p>
              <span>Genre:</span> {film.genre}
            </p>
            <p>
              <span>Plot:</span> {film.plot}
            </p>
            <a target="_blank" rel="noreferrer" href={film.imdbLink}>Go to Imdb</a>
            <br />
            <img src={film.imgUrl} alt={film.name} width={250} height={350}/>
            <hr/>
          </div>
        );
      })}
    </div>
  );
};

Movies.propTypes = {
  listaNaFilmovi: PropTypes.arrayOf(PropTypes.object).isRequired,
};
