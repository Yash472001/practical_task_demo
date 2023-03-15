import { gql } from "@apollo/client";


export const ALL_COLLECTION = gql`
  {
    allCollection {
      _id
      name
      address
    }
  }
`;

export const CREATE_COLLECTION = gql`
mutation CreateCollection($input:CollectionInput!) {
  createCollection(input:$input) {
    _id
    name
    address
  }
}
`;

export const UPDATE_COLLECTION = gql`
  mutation UpdateCollection($id: ID!,$input: CollectionInput!) {
    updateCollection(_id:$id,input:$input) {
      _id
      name
      address
    }
  }
`;

export const DELETE_COLLECTION = gql`
  mutation DeleteCollection($id: ID!) {
    deleteCollection(_id:$id) {
      _id
      name
      address
    }
  }
`;