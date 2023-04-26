import { getInstance } from '../api';

export class FollowRoutes {
  public static async add(data: any) {
    const instance = await getInstance();
    const response = await instance.post('/follow', data);
    return response;
  }

  public static async remove(data: any) {
    const instance = await getInstance();
    const response = await instance.delete(`/follow/${data.artistId}`);
    return response;
  }
} 