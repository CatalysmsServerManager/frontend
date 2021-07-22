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
    const response = await httpService.get('/auth/session');
    if (!response.ok) { return false; }
    return true;
  }

  async function signIn(redirect: string = '/store/dashboard'): Promise<void> {
    const hasToken = await isAuthenticated();
    if (hasToken) {
      window.location.pathname = '/store/dashboard';
      return;
    }
    setRedirect(redirect);
    routingService.navigateExternal('/auth/steam');
  }

  // This returns the User details (name,email,...)
  async function getSession(): Promise<UserData | null> {
    const response = await httpService.get('/auth/session');
    if (!response.ok) { return null; }
    const jsonResult = await response.json();
    return jsonResult;
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
