export interface INotificationItem {
  key: string;
  title: string;
  data: {
    email: boolean;
    inApp: boolean;
  };
}
