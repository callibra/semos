import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

const getStarRating = (rating) => {
  const starTotal = 5;
  const starPercentage = (rating / starTotal) * 100;
  const starWidth = `${Math.round(starPercentage / 10) * 10}%`;
  return { width: starWidth };
};

export const Movies = ({ listOfMovies }) => {
  return (
    <div id="movies">
      {listOfMovies.map((movie, i) => {
        return (
          <div key={i}>
            <h3>
              <span>Title:</span> {movie.name}
            </h3>
            <p>
              <span>Release Date:</span> {movie.releaseDate}
            </p>
            <p>
              <span>Genre:</span> {movie.genre}
            </p>
            <p>
              <span>Plot:</span> {movie.plot}
            </p>
            <p>
              <span>IMDB Rating:</span>{" "}
              <div className="star-rating" style={getStarRating(movie.rating)}></div>
            </p>
            <a target="_blank" rel="noreferrer" href={movie.imdbLink}>Link to Imdb</a>
            <br />
            <img src={movie.imgUrl} alt={movie.name} width={555} height={555}/>
            <hr/>
          </div>
        );
      })}
    </div>
  );
};

Movies.propTypes = {
  listOfMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
