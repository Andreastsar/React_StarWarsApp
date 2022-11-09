import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import CharactersList from "./components/CharactersList";
import PlanetsList from "./components/PlanetsList";
import "./App.css";

function App() {
   //-------------------------------------------------------//
   const [moviesActive, setMoviesActive] = useState(false);
   const [charactersActive, setCharactersActive] = useState(false);
   const [planetsActive, setPlanetsActive] = useState(false);

   const [movies, setMovies] = useState([]);
   const [characters, setCharacters] = useState([]);
   const [planets, setPlanets] = useState([]);

   const fetchMoviesHandler = () => {
      setMoviesActive(true);
      setCharactersActive(false);
      setPlanetsActive(false);
      fetch(`https://swapi.dev/api/films/`)
         .then((res) => res.json())
         .then((data) => setMovies(data.results));
   };

   const fetchCharactersHandler = () => {
      setMoviesActive(false);
      setCharactersActive(true);
      setPlanetsActive(false);
      fetch(`https://swapi.dev/api/people/`)
         .then((res) => res.json())
         .then((data) => setCharacters(data.results));
   };

   const fetchPlanetsHandler = () => {
      setMoviesActive(false);
      setCharactersActive(false);
      setPlanetsActive(true);
      fetch(`https://swapi.dev/api/planets/`)
         .then((res) => res.json())
         .then((data) => setPlanets(data.results));
   };

   return (
      <React.Fragment>
         <section>
            <h1>STAR WARS API</h1>
            <p>
               Press the buttons to see some information about your favorite
               Star Wars movies content!
            </p>
            <p>May the Force be with you!</p>
            <button onClick={fetchMoviesHandler}>Movies</button>
            <button onClick={fetchCharactersHandler}>Characters</button>
            <button onClick={fetchPlanetsHandler}>Planets</button>
         </section>

         {moviesActive && (
            <section>
               <MoviesList movies={movies}></MoviesList>
            </section>
         )}
         {charactersActive && (
            <section>
               <CharactersList characters={characters}></CharactersList>
            </section>
         )}
         {planetsActive && (
            <section>
               <PlanetsList planets={planets}></PlanetsList>
            </section>
         )}
      </React.Fragment>
   );
}

export default App;
