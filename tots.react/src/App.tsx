import React from 'react';
import logo from './logo.svg';
import './App.css';
import { REACT_APP_GRAPHQL_PORT } from './env';
import { DemoComponent } from './page/Demo';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <p>learn react</p>
        <p>{REACT_APP_GRAPHQL_PORT}</p>
        <DemoComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
