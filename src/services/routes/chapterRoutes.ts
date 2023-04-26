import { getInstance } from '../api';

export class ChapterRoutes {
  public static async getById(id: string) {
    const instance = await getInstance();
    const response = await instance.get(`/chapter/${id}`);
    return response;
  }
}