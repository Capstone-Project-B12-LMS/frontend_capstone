import { gql, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";

const classQuery = gql`
  query UserClass($id: ID!) {
    user {
      findByClassByUserId(id: $id, classStatus: ACTIVE) {
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

const useGetClass = () => {
  const { dataLogin } = useSelector((state) => state.login);
  const { data, loading, error } = useQuery(classQuery, {
    variables: { id: dataLogin?.id },
  });
  return { data, loading, error };
};

export default useGetClass;
