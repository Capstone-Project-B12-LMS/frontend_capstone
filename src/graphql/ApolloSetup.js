import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  
  const client = new ApolloClient({
    uri: "http://ec2-34-212-169-254.us-west-2.compute.amazonaws.com/graphql",
    cache: new InMemoryCache(),
  });
  export default client;