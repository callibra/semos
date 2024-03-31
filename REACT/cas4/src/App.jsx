import React, { useState, useEffect } from "react";
import { Movies } from "./components/Movies";
import { LifecycleExample } from "./components/LifecycleExample";

const filmovi = [
  {
    name: "Back to the future",
    releaseDate: 1985,
    genre: "Adventure,Comedy,Sci-Fi",
    plot: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    imdbLink:
      "https://www.imdb.com/title/tt0088763/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_back",
    imgUrl:
      "https://images.fathomevents.com/image/upload/w_1200,dpr_2,f_auto,q_auto/v1694120027/Events/2023/1849/BC2_Fathom_1000x1480_FEWebsiteThumbnail_2.jpg.jpg",
  },
  {
    name: "The Dark Knight",
    releaseDate: 2008,
    genre: "Action,Crime,Drama",
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    imdbLink:
      "https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520da",
    imgUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
  },
  {
    name: "Man on a ledge",
    releaseDate: 2012,
    genre: "Action,Crime,Thriller",
    plot: "As a police psychologist works to talk down an ex-con who is threatening to jump from a Manhattan hotel rooftop, the biggest diamond heist ever committed is in motion.",
    imdbLink:
      "https://www.imdb.com/title/tt1568338/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Man%2520on%2520a",
    imgUrl: "https://m.media-amazon.com/images/I/51jX7RzEuYL._AC_SY780_.jpg",
  },
];

export function App() {
  const [promenliva, setPromenliva] = useState("Vrednost 1");
  const [inputValue, setInputValue] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [brojac, setBrojac] = useState(0);

  // function changeValue(){
  //   setPromenliva("Nova Vrednost");
  // }

  function handleChangedValue(event) {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    console.log("Username: ", username);
    console.log("Password: ", password);
  }, [username, password]); // [] <-- dependency array ako e prazen ovaa metoda e componentDidMount,za componentDidUpdate dodavame elementi(promenlivi) za koi ke se azurira/prati nivnata vrednost

  return (
    <div id="app">
      {/* <Movies listaNaFilmovi={filmovi}/> */}
      {/* <LifecycleExample/> */}
      <p>State: {promenliva} </p>
      <button
        onClick={() => {
          setPromenliva("nova Vrednost");
        }}
      >
        Change Me !
      </button>
      <br />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter something here"
        value={inputValue}
        onChange={handleChangedValue}
      />
      <h3>{inputValue}</h3>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <br />
      <h3>Counter: {brojac}</h3>
      <img
        width={500}
        height={600}
        src={
          "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg"
        }
        alt="Batman"
        onClick={()=>{setBrojac(brojac + 1)}}
      />
    </div>
  );
}
