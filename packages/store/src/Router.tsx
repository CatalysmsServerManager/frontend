import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signin, Frame, Dashboard, Redirect, OnBoarding, Orders, PaymentState, Products, Profile, DeployServer, DiscordReturn } from './pages';
import { Error404 } from '@csmm/ui';
import { AuthenticatedRoute } from './components';

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Signin />} path="/" />
      <Route element={<Redirect />} path="/redirect" />
      <AuthenticatedRoute element={<Frame />} path="/store">
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Products />} path="/products" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Orders />} path="/orders" />
        <Route element={<PaymentState />} path="/payment/:subscriptionId" />
      </AuthenticatedRoute>

      <AuthenticatedRoute element={<DeployServer />} path="/deploy/:subscriptionId" />
      <AuthenticatedRoute element={<DiscordReturn />} path="/discord/return" />
      <Route element={<OnBoarding />} path="/onboarding" />
      {/* Page not found matches with everything => should stay at bottom */}
      <Route element={<Error404 />} path="*" />
    </Routes>
  </BrowserRouter>
);
