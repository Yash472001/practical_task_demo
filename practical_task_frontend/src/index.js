import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CollectionContextProvider from './context/CollectionContext';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const client = new ApolloClient({
  uri: `${baseURL}/graphql`,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <CollectionContextProvider>
      <App />
    </CollectionContextProvider>
  </ApolloProvider>
  
);


