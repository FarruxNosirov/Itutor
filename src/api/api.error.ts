import {APP_ROUTES} from '../constants/routes';
import {
  AppNotification,
  AppNotificationType,
} from '../types/Notification.types';

export type ApiError = {
  code: API_ERROR_CODES;
  title?: string;
  massege?: string;
  details: [
    {
      source: string;
      message: string;
    },
  ];
};
export type ApiErrorDescription = Map<
  API_ERROR_CODES,
  {
    title?: string;
    message?: string;
  }
>;
export const IGNORED_API_ENDPOINTS: Record<string, string[]> = {
  get: [],
  post: ['/mobile/account/logout'],
  put: [],
};
export enum API_ERROR_CODES {
  EMAIL_IS_NOT_RECOGNIZED = 'email_is_not_recognized',
  EMAIL_ALREADY_IN_USE = 'email_already_in_use',
  VALIDATION = 'validation',
  INCORRECT_CODE = 'incorrect_code',
  INCORRECT_EMAIL_OR_PASSWORD = 'incorrect_email_or_password',
}
export const ERROR_NOTIFICATIONS = [
  API_ERROR_CODES.INCORRECT_CODE,
  API_ERROR_CODES.INCORRECT_EMAIL_OR_PASSWORD,
  API_ERROR_CODES.VALIDATION,
];
export const ERROR_ROUTES = [
  {
    errorCodes: [
      API_ERROR_CODES.INCORRECT_CODE,
      API_ERROR_CODES.INCORRECT_EMAIL_OR_PASSWORD,
      API_ERROR_CODES.VALIDATION,
    ],
    route: APP_ROUTES.ERROR,
  },
];
export const DEFAULT_ERROR_NOTIFICATION: AppNotification = {
  title: 'Something went wrong',
  description: 'Please try again later',
};

export const INTERNET_ERROR_NOTIFICATION: AppNotification = {
  title: 'No internet connection',
  description: 'Make sure your device is connected to the internet',
};

export const RESEND_CODE_NOTIFICATION: AppNotification = {
  title: 'New code has been sent',
  type: AppNotificationType.MESSAGE,
};

export const LOGOUT_NOTIFICATION: AppNotification = {
  title: 'You have been logged out',
  type: AppNotificationType.MESSAGE,
  isAlwaysVisible: true,
};
