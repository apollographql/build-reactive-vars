import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const spaceshipPassengersVar = makeVar([]);

const cache = new InMemoryCache({
  typePolicies: {
    Character: {
      fields: {
        isSpaceshipPassenger: {
          read(_, { readField }) {
            const characterId = readField("id");
            return spaceshipPassengersVar().includes(characterId);
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache,
});
