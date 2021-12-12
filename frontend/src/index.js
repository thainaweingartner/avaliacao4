import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
