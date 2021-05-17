import { createContext } from 'react';

export interface IUserContext {
  userData: IUserData;
  setUserData: React.Dispatch<IUserData>
}

export interface IUserData {
  email: string | null,
  discordId: string | null,
  steamId: string | null,
  firstName: string | null,
  lastName: string | null
}

export const UserContext = createContext<Partial<IUserContext>>(undefined!);
