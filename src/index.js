import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { UserContextProvider } from './layout/context/UserContext'


const port = 3030


const httpLink = createHttpLink({
  uri: `http://192.168.0.8:${port}/api`,
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

const client = new ApolloClient({
  uri: `http://192.168.0.8:${port}/api`,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
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
