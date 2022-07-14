import { gql, useQuery } from "@apollo/client";

const counselingQuery = gql`
  query counsReq($classId: ID!) {
    guidance {
      findByClassId(classId: $classId) {
        id
<<<<<<< HEAD
        topic
        content
        createdAt
=======
>>>>>>> 1c9a816e9af20a9bb5d82862704b1f2c122c6e9c
        user {
          id
          fullName
        }
      }
    }
  }
`;

const useGetCounseling = (classId) => {
    const {data, loading, error} = useQuery(counselingQuery, {
      variables: { classId: classId },
    });
    return {data, loading, error}
}

export default useGetCounseling;
