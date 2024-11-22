import { IProvidersProps } from "./types";

import { AuthContextProvider } from "../../contexts/Auth";

export const Providers = ({ children }: IProvidersProps) => {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}