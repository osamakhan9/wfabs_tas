import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import ContextProvider from './components/context/ContextProvider';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

