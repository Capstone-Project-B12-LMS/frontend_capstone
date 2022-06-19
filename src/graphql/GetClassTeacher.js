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

const useClassTeacher = () => {
  const { data, loading, error } = useQuery(classStudent);
  return { data, loading, error };
};

export default useClassTeacher;
