import { getInstance } from '../api';

export class CommentRoutes {
  public static async create(data: any) {
    const instance = await getInstance();
    const response = await instance.post('/comment', data);
    return response;
  }

  public static async remove(artworkId: string) {
    const instance = await getInstance();
    const response = await instance.delete(`/comment/${artworkId}`);
    return response;
  }
}