import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://3vtj5k3hyvgevfbnjakg3we4de.appsync-api.us-west-2.amazonaws.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-api-key': 'da2-aiavhvholvhoblx6z7aiturwoe'
  }
});
 
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
