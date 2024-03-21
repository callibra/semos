import React, { useState, useEffect } from "react";
import { Movies } from "./components/Movies";

const movie = [
  {
    name: "The Terminator",
    releaseDate: 1984,
    genre: "Adventure,Action,Sci-Fi",
    plot: "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",
    imdbLink:
      "https://www.imdb.com/title/tt0088247/?ref_=fn_al_tt_1",
    imgUrl:
      "https://static0.moviewebimages.com/wordpress/wp-content/uploads/movie/HpFU6MXNB3UhU3t3uG8IGkOpdSmeRZ.jpg",
  },
  {
    name: "Predator 2",
    releaseDate: 1990,
    genre: "Action,Horror,Sci-Fi",
    plot: "The Predator returns to Earth, this time to stake a claim on the war-torn streets of a dystopian Los Angeles.",
    imdbLink:
      "https://www.imdb.com/title/tt0100403/?ref_=fn_al_tt_3",
    imgUrl:
      "https://m.media-amazon.com/images/I/81kzJtBJUGL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Rocky IV",
    releaseDate: 1985,
    genre: "Drama,Sport",
    plot: "Rocky Balboa proudly holds the world heavyweight boxing championship, but a new challenger has stepped forward: Drago, a six-foot-four, 261-pound fighter who has the backing of the Soviet Union.",
    imdbLink:
      "https://www.imdb.com/title/tt0089927/?ref_=fn_al_tt_1",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/sr/thumb/3/3a/Rocky_iv_poster.jpg/640px-Rocky_iv_poster.jpg",
  },
  {
    name: "Interstellar",
    releaseDate: 2014,
    genre: "Adventure,Drama,Sci-Fi",
    plot: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    imdbLink:
      "https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_inters",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    name: "The Road Warrior",
    releaseDate: 1981,
    genre: "Action,Adventure,Sci-Fi",
    plot: "In the post-apocalyptic Australian wasteland, a cynical drifter agrees to help a small, gasoline-rich community escape a horde of bandits.",
    imdbLink:
      "https://www.imdb.com/title/tt0082694/?ref_=fn_al_tt_4",
    imgUrl:
      "https://images.moviesanywhere.com/c4e8a43058613acc41106533d8111928/a994fcb5-c2a4-44a4-b3f2-32b94ad66a01.jpg",
  },
];

export function App() {

  return (
    <div id="app">
      <Movies listOfMovies={movie}/>
    </div>
  );
}
