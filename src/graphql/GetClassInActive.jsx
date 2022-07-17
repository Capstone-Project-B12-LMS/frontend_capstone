import { gql, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";

const classQueryInActive = gql`
  query UserClass($id: ID!) {
    user {
      findByClassByUserId(id: $id, classStatus: INACTIVE) {
        id
        name
        createdBy
        code
        users {
          email
          fullName
        }
      }
    }
  }
`;

const useGetClassInActive = () => {
  const { dataLogin } = useSelector((state) => state.login);
  const { data, loading, error } = useQuery(classQueryInActive, {
    variables: { id: dataLogin?.id },
  });
  return { data, loading, error };
};

export default useGetClassInActive;
