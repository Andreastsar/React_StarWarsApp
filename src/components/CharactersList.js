import React from "react";
import Character from "./Character";
import classes from "./CharactersList.module.css";

const CharactersList = (props) => {
   return (
      <ul className={classes["characters-list"]}>
         {props.characters.map((character) => (
            <Character
               key={character.name}
               name={character.name}
               height={character.height}
               hair_color={character.hair_color}
               skin_color={character.skin_color}
               eye_color={character.eye_color}
               gender={character.gender}
               birth_year={character.birth_year}
            />
         ))}
      </ul>
   );
};

export default CharactersList;
