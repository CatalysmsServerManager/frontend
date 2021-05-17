import { httpService } from './httpService';
import { IUserData } from '../context';

class AuthenticationService {
  public async isAuthenticated(): Promise<IUserData | null> {
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

  public async hasServerSession(): Promise<boolean> {
    const response = await httpService.get('/auth/session');
    if (response.ok) {
      const jsonResult = await response.json();
      const stringResult = JSON.stringify(jsonResult);
      window.localStorage.setItem('hasBeenAuthenticatedBefore', JSON.stringify(true));
      window.sessionStorage.setItem('user', stringResult);
      return true;
    }
    return false;
  }

  public async logout(): Promise<Boolean> {
    const response = await httpService.get('/auth/logout');
    if (response.ok) {
      window.sessionStorage.removeItem('user');
      return true;
    }
    return false;
  }
}

export const authenticationService = new AuthenticationService();
