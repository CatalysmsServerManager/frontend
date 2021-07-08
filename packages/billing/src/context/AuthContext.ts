import { createContext } from 'react';
import { setRedirect } from 'helpers';
import { httpService, routingService } from 'services';
import { UserData } from 'context';

export interface IAuthContext {
  signIn: (redirect?: string) => Promise<void>;
  signOut: () => boolean;
  isAuthenticated: () => Promise<boolean>
  getSession: () => Promise<UserData | null>
}

export function AuthProvider(): IAuthContext {
  async function isAuthenticated(): Promise<boolean> {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) { return false; }

    const response = await httpService.get('/auth/session');
    if (!response.ok) { return false; }
    return true;
  }

  async function signIn(redirect: string = '/billing/dashboard'): Promise<void> {
    const hasToken = await isAuthenticated();
    if (hasToken) {
      window.location.pathname = '/billing/dashboard';
      return;
    }
    setRedirect(redirect);
    routingService.navigateExternal('/auth/steam');
  }

  // This returns the User details (name,email,...)
  async function getSession(): Promise<UserData | null> {
    // If the user has a jwt we can consider him logged in.
    // It could be expired.
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      const response = await httpService.get('/auth/session');
      if (!response.ok) { return null; }
      const jsonResult = await response.json();
      return jsonResult;
    }
    return null;
  }

  function signOut(): boolean {
    localStorage.removeItem('jwt');
    localStorage.removeItem('hasBeenAuthenticatedBefore');
    localStorage.removeItem('productId');
    return true;
  }

  return { signIn, signOut, isAuthenticated, getSession };
};

export const AuthContext = createContext<IAuthContext>(AuthProvider());
