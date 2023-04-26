import { getInstance } from '../api';

export class ReportRoutes {
  public static async create(data: any) {
    const instance = await getInstance();
    const response = await instance.post('/report', data);
    return response;
  }
}