import { gql, useMutation } from "@apollo/client";

const registerQuery = gql`
mutation Register($fullName: String!, $email: String!, $password: String!, $telepon: String!) {
  user {
    register(
      request: { fullName: $fullName, email: $email, password: $password, telepon: $telepon }
    ) {
      id
      fullName
      email
      telepon
    }
  }
}
`;

const useRegisterMutation = () => {
    const [insertRegisterData, { data, loading, error }] = useMutation(registerQuery);
    
    return {insertRegisterData, data, loading, error}
}

export default useRegisterMutation;