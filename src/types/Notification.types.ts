export enum AppNotificationType {
  ERROR,
  MESSAGE,
}

export type AppNotification = {
  type?: AppNotificationType;
  isAlwaysVisible?: boolean;
  title?: string;
  description?: string;
};

export type AppNotifications = (AppNotification & {
  id: string;
})[];
