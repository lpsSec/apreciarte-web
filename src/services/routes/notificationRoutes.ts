import { getInstance } from '../api';

export class NotificationRoutes {
  public static async getByUserId(userId: string) {
    const instance = await getInstance();
    const response = await instance.get(`/notification/${userId}`);
    return response;
  }
}