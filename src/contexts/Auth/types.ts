import { ReactNode } from "react";

export interface IDataUserProps {
  username: string;
  email: string;
}

export interface IAuthContextProps {
  handleSignIn: () => void;
  handleSignOut: () => void;
  dataUser: IDataUserProps | null;
  setDataUser: (data: IDataUserProps | null) => void;
}

export interface IAuthContextProviderProps {
  children: ReactNode;
}
