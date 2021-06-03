import { createContext } from 'react';
import { setRedirect } from 'helpers';
import { httpService, routingService } from 'services';
import { UserData } from 'context';

export interface IAuthContext {
  signIn: (redirect?: string) => Promise<void>;
  signOut: () => Promise<boolean>;
  isAuthenticated: () => Promise<boolean>
  getSession: () => Promise<UserData | null>
}

export function AuthProvider(): IAuthContext {
  async function isAuthenticated(): Promise<boolean> {
    const userSession = window.sessionStorage.getItem('user');
    if (!userSession) {
      const response = await httpService.get('/auth/session');
      if (response.ok) {
        window.localStorage.setItem('hasBeenAuthenticatedBefore', JSON.stringify(true));
        return true;
      }
      return false;
    }
    return await JSON.parse(userSession);
  }

  async function signIn(redirect: string = '/billing/dashboard'): Promise<void> {
    const hasSession = await isAuthenticated();
    if (hasSession) {
      window.location.pathname = '/billing/dashboard';
      return;
    }
    setRedirect(redirect);
    routingService.navigateExternal('/auth/steam');
  }

  async function getSession(): Promise<UserData | null> {
    const userSession = window.sessionStorage.getItem('user');

    if (!userSession) {
      const response = await httpService.get('/auth/session');
      if (response.ok) {
        const jsonResult = await response.json();
        const stringResult = JSON.stringify(jsonResult);
        window.localStorage.setItem('hasBeenAuthenticatedBefore', JSON.stringify(true));
        window.sessionStorage.setItem('user', stringResult);
        return jsonResult;
      }
      return null;
    }
    return await JSON.parse(userSession);
  }

  async function signOut(): Promise<boolean> {
    const response = await httpService.get('/auth/logout');
    if (response.ok) {
      window.sessionStorage.removeItem('user');
      window.localStorage.removeItem('hasBeenAuthenticatedBefore');
      window.localStorage.removeItem('productId');
      window.location.pathname = '/';
      return true;
    }
    return false;
  }
  return { signIn, signOut, isAuthenticated, getSession };
};

export const AuthContext = createContext<IAuthContext>(AuthProvider());
