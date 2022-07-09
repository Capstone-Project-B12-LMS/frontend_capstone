import { gql, useMutation } from "@apollo/client";
import { FIND_CLASS_MATERIAL } from "./MaterialQuery";

const updateMaterial = gql`
  mutation updateMaterial {
    material {
      update(
        id: "96b4b3e3-997f-48cd-b012-7d65c351eaa9"
        request: {
          classId: "3470ed0b-52f4-4d2f-93dd-8e7c533f96b0"
          title: "Intro"
          content: "Pengenalan"
          point: 5
        }
      ) {
        id
      }
    }
  }
`;

const useUpdateMaterial = (classId) => {
    const [insertNewMaterial, { data, loading, error }] = useMutation(updateMaterial,{
        refetchQueries: [{
          query: FIND_CLASS_MATERIAL,
          variables: {id: classId}
        }]
      });
    
    return {insertNewMaterial, data, loading, error}
}

export default useUpdateMaterial;
