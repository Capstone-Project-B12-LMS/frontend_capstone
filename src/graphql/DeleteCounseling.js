import { gql, useMutation } from "@apollo/client";
import { counselingQuery } from "./GetCounseling";

const deleteCounseling = gql`
  mutation deleteCounseling($id: ID!) {
    guidance {
      deleteById(id: $id) {
        error
        status
      }
    }
  }
`;

const useDeleteCounseling = (classId) => {
  const [insertCounselingID, { data, loading, error }] =
    useMutation(deleteCounseling, {
      refetchQueries: [{
        query: counselingQuery,
        variables: {classId: classId}
      }]
    });

  return { insertCounselingID, data, loading, error };
};

export default useDeleteCounseling;
