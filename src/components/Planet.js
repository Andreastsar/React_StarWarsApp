import React from "react";
import classes from "./Planet.module.css";

const Planet = (props) => {
   return (
      <li className={classes.planet}>
         <h2>{props.name}</h2>
         <h3>Terrain: {props.terrain}</h3>
         <p>Climate: {props.climate}</p>
         <p>Gravity: {props.gravity}</p>
         <p>Population: {props.population}</p>
         <p>Rotation Period: {props.rotation_period}</p>
         <p>Orbital Period: {props.orbital_period}</p>
      </li>
   );
};

export default Planet;
