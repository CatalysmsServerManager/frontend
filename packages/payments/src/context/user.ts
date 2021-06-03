import { Dispatch, createContext } from 'react';

export interface IUserContext {
  userData: Partial<UserData>;
  setUserData: Dispatch<Partial<UserData>>
}

export interface UserData {
  email: string | null,
  discordId: string | null,
  steamId: string | null,
  firstName: string | null,
  lastName: string | null
}

export const UserContext = createContext<IUserContext>(undefined!);
