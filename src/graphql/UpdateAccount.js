import { gql, useMutation } from "@apollo/client";
import { userQuery } from "./GetUser";

const updateAccountQuery = gql`
  mutation update(
    $id: ID!
    $fullName: String!
    $telepon: String!
    $email: String!
  ) {
    user {
      updateById(
        id: $id
        request: { fullName: $fullName, telepon: $telepon, email: $email }
      ) {
        id
        fullName
        email
      }
    }
  }
`;

const useUpdateAccount = (id) => {
  const [insertAccountData, { data, loading, error }] =
    useMutation(updateAccountQuery, {
      refetchQueries: [{
        query: userQuery,
        variables: {id: id}
      }]
    });

  return { insertAccountData, data, loading, error };
};

export default useUpdateAccount;
