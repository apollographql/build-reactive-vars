import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const spaceshipPassengersVar = makeVar(["1", "2", "3"]);

const cache = new InMemoryCache({
  // typePolicies: {
  // I don't think we need this one anymore!
  //   Query: {
  //     fields: {
  //       spaceshipPassengers: {
  //         read() {
  //           return spaceshipPassengersVar();
  //         },
  //       },
  //     },
  //   },
  //   Character: {
  //     fields: {
  //       isSpaceshipPassenger: {
  //         read(_, { readField }) {
  //           const characterId = readField("id");
  //           const spaceshipPassengers = spaceshipPassengersVar();
  //           return spaceshipPassengers.includes(characterId);
  //         },
  //       },
  //     },
  //   },
  // },
});

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache,
});
