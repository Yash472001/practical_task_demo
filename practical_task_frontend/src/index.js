import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CollectionContextProvider from './context/CollectionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <CollectionContextProvider>
    <App />
  </CollectionContextProvider>
  
);


