import { gql, useMutation } from "@apollo/client";

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

const useUpdateAccount = () => {
  const [insertAccountData, { data, loading, error }] =
    useMutation(updateAccountQuery);

  return { insertAccountData, data, loading, error };
};

export default useUpdateAccount;
