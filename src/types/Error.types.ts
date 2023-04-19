import {ApiError} from '../api/api.error';
import {APP_ROUTES} from '../constants/routes';

export type ErrorScreen = {
  route: APP_ROUTES;
  error: ApiError;
};
