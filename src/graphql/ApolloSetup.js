import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { concat } from "@apollo/client";
import { Cookies } from "react-cookie";
import CONST from '../utils/constant';



const cookies = new Cookies();

const httpLink = new HttpLink({
  uri: `${process.env.NODE_ENV === "production" ? "" : CONST.BASE_URL}/gql/v1/graphql`,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = cookies.get('token');
  operation.setContext({
    headers: {
      "Authorization": token ? `Bearer ${token}` : "",
      "Access-Control-Allow-Origin": '*'
    },
  });
  return forward(operation);
});


const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          class: {
            merge: true,
          },
          user: {
            merge: true,
          },
          material: {
            merge: true,
          },
        },
      },
    },
  }),
});
export default client;
