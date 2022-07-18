import { gql, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";

const classQueryActive = gql`
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
  const { data, loading, error } = useQuery(classQueryActive, {
    variables: { id: dataLogin?.id },
  });
  return { data, loading, error };
};

export default useGetClass;
