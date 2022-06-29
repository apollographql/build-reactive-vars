import React from "react";
// STEP 6 pt 1
// import { spaceshipPassengersVar } from "../client";

export default function CharacterCard({ character }) {
  return (
    <div
      key={character.id}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 12,
        border: "2px solid #80acbb",
      }}
    >
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "100%" }}
      />
      <div>
        <h2>{character.name}</h2>
        <h3>{character.species}</h3>
      </div>
      {/* STEP 1 */}
      {/* <button
        style={{ marginTop: "auto" }}
        //  STEP 7 & 8 
        onClick={() =>
          spaceshipPassengersVar(
            character.isSpaceshipPassenger
              ? spaceshipPassengersVar().filter(
                  (characterId) => characterId !== character.id
                )
              : [...spaceshipPassengersVar(), character.id]
          )
        }
      >
         // STEP 6 pt 2 
        {character.isSpaceshipPassenger ? "Remove from" : "Add to"} spaceship
      </button> */}
    </div>
  );
}
