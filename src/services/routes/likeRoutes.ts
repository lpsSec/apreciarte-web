import { getInstance } from '../api';

export class LikeRoutes {
  public static async add(data: any) {
    const instance = await getInstance();
    const response = await instance.post('/like', data);
    return response;
  }

  public static async remove(artworkId: any) {
    const instance = await getInstance();
    const response = await instance.delete(`/like/${artworkId}`);
    return response;
  }
}