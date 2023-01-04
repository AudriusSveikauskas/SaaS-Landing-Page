import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import HomePage from './pages/HomePage';

const App = () => (
  <HashRouter basename="/index.html">
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
