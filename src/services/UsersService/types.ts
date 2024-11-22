import { ResponseHttpClient } from "../../infraestructure/Http/contracts";

export interface IUsersServiceProps {
  getUser: (idUser: number) => Promise<ResponseHttpClient>;
}
