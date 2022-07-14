import { gql, useMutation } from "@apollo/client";

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

const useDeleteCounseling = () => {
  const [insertCounselingID, { data, loading, error }] =
    useMutation(deleteCounseling);

  return { insertCounselingID, data, loading, error };
};

export default useDeleteCounseling;
