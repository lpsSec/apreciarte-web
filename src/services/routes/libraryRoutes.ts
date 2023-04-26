import { getInstance } from '../api';

export class LibraryRoutes {
  public static async save(data: any) {
    const instance = await getInstance();
    const response = await instance.post('/library', data);
    return response;
  }
}