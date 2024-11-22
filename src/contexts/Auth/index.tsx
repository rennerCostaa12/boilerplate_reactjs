import { createContext, useState, useContext } from "react";

import {
  IDataUserProps,
  IAuthContextProps,
  IAuthContextProviderProps,
} from "./types";

export const AuthContext = createContext<IAuthContextProps | undefined>(
  undefined
);

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [dataUser, setDataUser] = useState<IDataUserProps | null>(null);

  const handleSignIn = () => {};

  const handleSignOut = () => {};

  return (
    <AuthContext.Provider
      value={{ dataUser, setDataUser, handleSignIn, handleSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const responseAuthContext = useContext(AuthContext);

  if (!responseAuthContext) {
    throw new Error(
      "O useAuthContext precisa ser usado dentro do AuthContextProvider"
    );
  }

  return responseAuthContext;
};
