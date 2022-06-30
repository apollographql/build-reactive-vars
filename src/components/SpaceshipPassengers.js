import React from "react";
import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { spaceshipPassengersVar } from "../client";

export const GET_PASSENGERS = gql`
  query GetPassengers {
    characters {
      results {
        id
        image
      }
    }
  }
`;

export default function SpaceshipPassengers() {
  const passengers = useReactiveVar(spaceshipPassengersVar);

  const { data, loading, error } = useQuery(GET_PASSENGERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {passengers.map((charId) => {
        const character = data.characters.results.find(
          (char) => char.id === charId
        );

        return (
          <img
            key={character.id}
            src={character.image}
            style={{
              width: 80,
              marginRight: 10,
              borderRadius: "50%",
              border: "5px solid #318bbe",
            }}
          />
        );
      })}
    </div>
  );
}
