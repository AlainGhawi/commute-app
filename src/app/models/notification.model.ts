export interface AppNotification {
  id: string;
  type: 'match' | 'ride' | 'system';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}
