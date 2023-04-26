import { getInstance } from '../api';

export class UserRoutes {
  public static async getMe() {
    const instance = await getInstance();
    const response = await instance.get(`/user/me`);
    return response;
  }

  public static async getById(id: string) {
    const instance = await getInstance();
    const response = await instance.get(`/user/${id}`);
    return response;
  }

  public static async updateById(data: any) {
    const instance = await getInstance();
    const response = await instance.put('/user', data)
    return response;
  }
}