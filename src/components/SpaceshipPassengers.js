import React from "react";
// STEP 9
// import { gql, useQuery } from "@apollo/client";

// STEP 3 then remove in STEP 10
// import { spaceshipPassengersVar } from "../client";

// STEP 9
// export const GET_PASSENGERS = gql`
//   query GetPassengers {
//     characters {
//       results {
//         id
//         image
//         isSpaceshipPassenger @client
//       }
//     }
//   }
// `;

export default function SpaceshipPassengers() {
  /* STEP 3 then remove in STEP 10 */
  // console.log(spaceshipPassengersVar());

  // STEP 11
  // const { data, loading, error } = useQuery(GET_PASSENGERS);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  // const {
  //   characters: { results },
  // } = data;

  // const passengers = results.filter(
  //   (character) => character.isSpaceshipPassenger
  // );

  // if (!passengers.length) {
  //   return <p>No passengers. Add someone to your spaceship.</p>;
  // }

  return (
    <div
    // STEP 12
    // style={{
    //   display: "grid",
    //   gridTemplateColumns: "repeat(auto-fill, 100px)",
    //   gap: 20,
    // }}
    >
      TODO
      {/* STEP 12 */}
      {/* {passengers.map((passenger) => (
        <img
          key={passenger.id}
          src={passenger.image}
          alt={passenger.name}
          style={{
            width: "100%",
            borderRadius: "50%",
            border: "5px solid #318bbe",
          }}
        />
      ))} */}
    </div>
  );
}
