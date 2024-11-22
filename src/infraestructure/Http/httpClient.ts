import axios, { AxiosError, AxiosInstance } from "axios";

import { IHttpClient, HttpRequest } from "./contracts";

export class HttpClient implements IHttpClient {
  constructor(
    private api: AxiosInstance = axios,
    private baseUrl: string = import.meta.env.VITE_APP_BASE_URL
  ) {}

  static create() {
    return new HttpClient();
  }

  async sendRequest<ResponseHttpClient, TBody>(props: HttpRequest<TBody>) {
    const { endpoint, method, body, headers } = props;
    try {
      const responseData = await this.api.request<ResponseHttpClient>({
        url: `${this.baseUrl}/${endpoint}`,
        method,
        data: body,
        headers,
      });

      return {
        message: "",
        status: true,
        statusCode: responseData.status,
        data: responseData.data,
      };
    } catch (error) {
      const errorAxios = error as AxiosError;
      const status = errorAxios.response?.status || 500;
      const message = errorAxios.message;
      throw new Error(`Request failed with status ${status}: ${message}`);
    }
  }
}
