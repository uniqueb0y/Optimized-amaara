import { gql } from "@apollo/client";

export const GET_RAFFLE = gql`
    query GetRaffle {
        getRaffle {
            id
            winnerName
            month
            year
            image
            link
        }
    }
`;