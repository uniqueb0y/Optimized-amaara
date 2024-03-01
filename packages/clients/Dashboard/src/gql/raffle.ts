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
            createdBy
            createdDate
        }
    }
`;

export const CREATE_RAFFLE = gql`
    mutation CreateRaffle($raffleInput: RaffleInput!) {
        createRaffle(raffleInput: $raffleInput) {
            id
            isSuccess
            error
        }
    }
`;

export const DELETE_RAFFLE = gql`
    mutation DeleteRaffle($id: ID!) {
        deleteRaffle(id: $id) {
            id
            isSuccess
            error
        }
    }
`;