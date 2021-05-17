import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signin, Frame, Dashboard, Redirect, MoreInformation, Orders, PaymentState, Products, Profile, DeployServer, PaymentComplete, DiscordReturn, PageNotFound } from './pages';
import { AuthenticatedRoute } from './components';

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Signin />} path='/' />
      <Route element={<Redirect />} path='/redirect' />
      <AuthenticatedRoute element={<Frame />} path='/billing'>
        <Route element={<Dashboard />} path='/dashboard' />
        <Route element={<Products />} path='/products' />
        <Route element={<Profile />} path='/profile' />
        <Route element={<Orders />} path='/orders' />
        <Route element={<PaymentState />} path='/payment-state' />
        <Route element={<PaymentComplete />} path='/payment-complete' />
      </AuthenticatedRoute>

      <AuthenticatedRoute element={<DeployServer />} path='/deploy/:subscriptionId' />
      <AuthenticatedRoute element={<DiscordReturn />} path='/discord/return' />
      <Route element={<MoreInformation />} path='/more-information' />
      {/* Page not found (should stay at bottom)*/}
      <Route element={<PageNotFound />} path='*' />
    </Routes>
  </BrowserRouter>
);
