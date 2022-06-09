import { gql, useMutation } from "@apollo/client";

const loginQuery = gql`
mutation Login($email: String!, $password: String!) {
  user {
    login(request: { email: $email, password: $password }) {
      token
      error
    }
  }
}
`;

const useLoginMutation = () => {
    const [insertLoginData, { data, loading, error }] = useMutation(loginQuery);
    
    return {insertLoginData, data, loading, error}
}

export default useLoginMutation;