export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch",
}

export type HttpRequest<TBody> = {
  endpoint: string;
  method: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
};

export type ResponseHttpClient<TResponse = unknown> = {
  status: boolean;
  statusCode: number;
  data: TResponse;
  message: string;
};

export interface IHttpClient {
  sendRequest: <TBody = unknown>(
    request: HttpRequest<TBody>
  ) => Promise<ResponseHttpClient>;
}
