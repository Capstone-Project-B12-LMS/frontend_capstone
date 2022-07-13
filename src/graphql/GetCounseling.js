import { gql, useQuery } from "@apollo/client";

const counselingQuery = gql`
  query counsReq($classId: ID!) {
    guidance {
      findByClassId(classId: $classId) {
        id
        topic
        content
        createdAt
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
