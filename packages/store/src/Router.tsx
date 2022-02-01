import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signin, Dashboard, Redirect, OnBoarding, Orders, PaymentState, Products, Profile, DeployServer, DiscordReturn } from './pages';
import { Error404 } from '@csmm/ui';
import { AuthenticatedRoute } from './components';

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Signin />} path="/" />
      <Route element={<Redirect />} path="/redirect" />
      <Route element={<AuthenticatedRoute />} path="/store">
        <Route element={<Dashboard />} path="/store/dashboard" />
        <Route element={<Products />} path="/store/products" />
        <Route element={<Profile />} path="/store/profile" />
        <Route element={<Orders />} path="/store/orders" />
        <Route element={<PaymentState />} path="/store/payment/:subscriptionId" />
      </Route>

      <Route element={<AuthenticatedRoute showFrame={false} />} path="/deploy">
        <Route element={<DeployServer />} path="/deploy/:subscriptionId" />
      </Route>
      <Route element={<AuthenticatedRoute showFrame={false} />} path="/discord">
        <Route element={<DiscordReturn />} path="/discord/return" />
      </Route>

      <Route element={<OnBoarding />} path="/onboarding" />
      {/* Page not found matches with everything => should stay at bottom */}
      <Route element={<Error404 />} path="*" />
    </Routes>
  </BrowserRouter>
);
