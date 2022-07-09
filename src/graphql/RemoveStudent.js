import { gql, useMutation } from "@apollo/client";
import { GET_CLASS_BYID } from "./ClassQuery";

const removeStudent = gql`
  mutation removeStudent ($classId: ID!, $userId: ID!) {
    class {
      deleteUserById(
        classId: $classId
        userId: $userId
      ) {
        id
        room
        name
        status
      }
    }
  }
`;

const useRemoveStudent = (classId) => {
    const [insertStudentData, { data, loading, error }] = useMutation(removeStudent,{
        refetchQueries: [{
          query: GET_CLASS_BYID,
          variables: {id: classId}
        }]
      });
    
    return {insertStudentData, data, loading, error}
}

export default useRemoveStudent;