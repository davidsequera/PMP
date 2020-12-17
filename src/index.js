import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { UserContextProvider } from './layout/context/UserContext'
import { onError } from "@apollo/client/link/error";

const port = 3030

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const httpLink = createHttpLink({
  // uri: `http://192.168.0.6:${port}/api`,
  uri: `https://graph-pmp.vercel.app/api`,
  // uri: '/api'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(errorLink).concat(httpLink)
  // credentials: 'include'
})



ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
