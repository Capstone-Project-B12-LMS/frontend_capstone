import { gql, useQuery } from "@apollo/client";

const userQuery = gql`
  query User($id: ID!) {
    user {
      findById(id: $id) {
        id
        email
        fullName
        telepon
      }
    }
  }
`;

const useGetUser = (userId) => {
  const { data, loading, error } = useQuery(userQuery, {
    variables: { id: userId },
  });
  return { data, loading, error };
};

export default useGetUser;
