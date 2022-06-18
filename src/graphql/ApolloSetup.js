import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { concat } from "@apollo/client";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const httpLink = new HttpLink({
  uri: "http://ec2-34-212-169-254.us-west-2.compute.amazonaws.com/gql/v1/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = cookies.get('token');
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});
export default client;
