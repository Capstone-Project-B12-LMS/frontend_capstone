import { gql, useQuery } from "@apollo/client";

const classQuery = gql`
  query Class {
    class {
      findAll {
        id
        name
        code
        createdBy
      }
    }
  }
`;

const useGetClass = () => {
  const { data, loading, error } = useQuery(classQuery);
  return { data, loading, error };
};

export default useGetClass;
