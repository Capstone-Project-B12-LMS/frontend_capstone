import { gql, useQuery } from "@apollo/client";

const classStudent = gql`
  query Class {
    class {
      findAll {
        code
        name
        createdBy
        users {
          email
        }
      }
    }
  }
`;

const useClassStudent = () => {
  const { data, loading, error } = useQuery(classStudent);
  return { data, loading, error };
};

export default useClassStudent;
