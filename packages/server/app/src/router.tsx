import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} />
    </Routes>
  </BrowserRouter>
);
