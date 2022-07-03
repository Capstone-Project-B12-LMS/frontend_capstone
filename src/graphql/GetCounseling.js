import { gql, useQuery } from "@apollo/client";

const counselingQuery = gql`
  query counsReq {
    guidance {
      findByClassId(classId: "bd506c6c-9777-423d-b3d6-d95a9d73a5c8") {
        user {
          fullName
        }
      }
    }
  }
`;

const useGetCounseling = () => {
    const {data, loading, error} = useQuery(counselingQuery);
    return {data, loading, error}
}

export default useGetCounseling;
