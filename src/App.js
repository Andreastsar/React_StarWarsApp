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
   const [isLoading, setIsLoading] = useState(false);

   const [movies, setMovies] = useState([]);
   const [characters, setCharacters] = useState([]);
   const [planets, setPlanets] = useState([]);

   const fetchMoviesHandler = async () => {
      setIsLoading(true);
      setMoviesActive(true);
      setCharactersActive(false);
      setPlanetsActive(false);
      const fetchedData = await fetch(`https://swapi.dev/api/films/`);
      const movieData = await fetchedData.json();
      setMovies(movieData.results);
      setIsLoading(false);
   };

   const fetchCharactersHandler = async () => {
      setIsLoading(true);
      setMoviesActive(false);
      setCharactersActive(true);
      setPlanetsActive(false);
      const fetchedData = await fetch(`https://swapi.dev/api/people/`);
      const characterData = await fetchedData.json();
      setCharacters(characterData.results);
      setIsLoading(false);
   };

   const fetchPlanetsHandler = async () => {
      setIsLoading(true);
      setMoviesActive(false);
      setCharactersActive(false);
      setPlanetsActive(true);
      const fetchedData = await fetch(`https://swapi.dev/api/planets/`);
      const planetsData = await fetchedData.json();
      setPlanets(planetsData.results);
      setIsLoading(false);
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

         {isLoading && <section>Loading...</section>}
         {!isLoading && moviesActive && (
            <section>
               <MoviesList movies={movies}></MoviesList>
            </section>
         )}
         {!isLoading && charactersActive && (
            <section>
               <CharactersList characters={characters}></CharactersList>
            </section>
         )}
         {!isLoading && planetsActive && (
            <section>
               <PlanetsList planets={planets}></PlanetsList>
            </section>
         )}
      </React.Fragment>
   );
}

export default App;
