import React from "react";
import classes from "./Character.module.css";

const Character = (props) => {
   return (
      <li className={classes.character}>
         <h2>{props.name}</h2>
         <h3>Born: {props.birth_year}</h3>
         <p>Height: {props.height}</p>
         <p>Gender: {props.gender}</p>
         <p>Skin Color: {props.skin_color}</p>
         <p>Hair Color: {props.hair_color}</p>
         <p>Eye Color: {props.eye_color}</p>
      </li>
   );
};

export default Character;
