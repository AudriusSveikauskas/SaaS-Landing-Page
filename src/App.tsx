import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import HomePage from './pages/HomePage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
