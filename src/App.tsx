import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import HomePage from './pages/HomePage';

const App = () => (
  <BrowserRouter basename="/SaaS-Landing-Page">
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
