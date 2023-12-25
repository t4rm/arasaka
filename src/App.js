import React from 'react';
import { DataProvider } from "./context/DataContext.js";
import Layout from './pages/Layout.js';

const App = () => {
  return (
    <DataProvider>
      <Layout />
    </DataProvider>
    );
}

export default App;
