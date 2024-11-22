import {
  HttpMethod,
  ResponseHttpClient,
} from "../../infraestructure/Http/contracts";
import { HttpClient } from "../../infraestructure/Http/httpClient";
import { IUsersServiceProps } from "./types";

export class UsersService implements IUsersServiceProps {
  constructor(private readonly httpClient: HttpClient) {}

  async getUser(idUser: Number) {
    const responseUser = await this.httpClient.sendRequest<
      ResponseHttpClient,
      unknown
    >({
      endpoint: `people/${idUser}`,
      method: HttpMethod.GET,
    });

    return responseUser;
  }
}
