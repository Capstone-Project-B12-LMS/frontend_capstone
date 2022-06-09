import { gql, useMutation } from "@apollo/client";

const registerQuery = gql`
mutation Register($fullName: String!, $email: String!, $password: String!) {
  user {
    register(
      request: { fullName: $fullName, email: $email, password: $password }
    ) {
      id
      fullName
      email
    }
  }
}
`;

const useRegisterMutation = () => {
    const [insertRegisterData, { data, loading, error }] = useMutation(registerQuery);
    
    return {insertRegisterData, data, loading, error}
}

export default useRegisterMutation;