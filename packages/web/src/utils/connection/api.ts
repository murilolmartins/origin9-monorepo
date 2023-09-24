import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL
});

const ERROR_CONNECTION = 'Error connecting to the server';
const ERROR_ACCESS_DANIED = 'Access denied';

enum MethodEnum {
  DELETE = 'delete',
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch'
}

export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch';

export default class ConnectionAPI {
  static async call<T, B = unknown>(
    url: string,
    method: MethodType,
    body?: B
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    switch (method) {
      case MethodEnum.DELETE:
      case MethodEnum.GET:
        return (await api[method]<T>(url, config)).data;
      case MethodEnum.POST:
      case MethodEnum.PUT:
      case MethodEnum.PATCH:
      default:
        return (await api[method]<T>(url, body, config)).data;
    }
  }

  static async connect<T, B = unknown>(
    url: string,
    method: MethodType,
    body?: B
  ): Promise<T> {
    return this.call<T>(url, method, body).catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.GET);
};
