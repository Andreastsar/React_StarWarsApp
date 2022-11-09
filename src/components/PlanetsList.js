import React from "react";
import Planet from "./Planet";
import classes from "./PlanetsList.module.css";

const PlanetsList = (props) => {
   return (
      <ul className={classes["planets-list"]}>
         {props.planets.map((planet) => (
            <Planet
               key={planet.name}
               name={planet.name}
               terrain={planet.terrain}
               gravity={planet.gravity}
               population={planet.population}
               climate={planet.climate}
               rotation_period={planet.rotation_period}
               orbital_period={planet.orbital_period}
            />
         ))}
      </ul>
   );
};

export default PlanetsList;
