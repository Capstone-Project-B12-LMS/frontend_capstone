import { gql, useQuery } from "@apollo/client";

const counselingQuery = gql`
  query counsReq($classId: ID!) {
    guidance {
      findByClassId(classId: $classId) {
        id
        topic
        content
        user {
          id
          fullName
        }
        classEntity{
          id
        }
      }
    }
  }
`;

const useGetCounseling = (classId) => {
  const { data, loading, error } = useQuery(counselingQuery, {
    variables: { classId: classId },
  });
  return { data, loading, error }
}

export  {useGetCounseling, counselingQuery};
