import {AxiosInstance} from 'axios';
const API_REQUEST_TIMEOUT = 30000;
const DEFAULT_ERROR = 'internal server error';

export default class BaseApi {
  public readonly axios: AxiosInstance | undefined;
  constructor() {}
}
