import {
  SiginUpPayload,
  SiginUpResponse,
  LoginPayload,
} from './requests/api.acount.tayps';
import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {API_REQUESTS_TIME, API_URL} from './api.constants';

import tokens from './tokens/tokens';
class Api {
  private readonly axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      timeout: API_REQUESTS_TIME,
    });
    this.axios.interceptors.response.use(
      (response: AxiosResponse) => response,
      error => {
        if (error) {
          console.log('Erorr:', error?.response.data);
          if (error?.response?.status === 401) {
            tokens.clear();
            // window.location.href = '/';
          }
        }
        return Promise.reject(error);
      },
    );
    this.axios.interceptors.request.use(
      (config: any) => {
        const token = tokens.getAccessToken();
        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }
  public SetAccessToken = (accessToken: string) => {
    this.axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  };
  public ClearAccessToke = () => {
    delete this.axios.defaults.headers.common.Authorization;
  };
  public hasAuthorizationHeader = () => {
    !!this.axios.defaults.headers.common.Authorization;
  };
  public signUp = (payload: SiginUpPayload) =>
    this.axios.post<any, SiginUpResponse>('/user/sign-up', payload);

  public login = (payload: LoginPayload) =>
    this.axios.post('/user/sign-in', payload);
}

const api = new Api();

export default api;
