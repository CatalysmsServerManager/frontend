import { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, TermsOfService } from './pages';

export const Router: FC = () => (
  <BrowserRouter>
    <Route element={<Home />} path="/" />
    <Route element={<TermsOfService />} path="/termsofservice" />
  </BrowserRouter>
);
