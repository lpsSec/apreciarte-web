import { getInstance } from '../api';

export class ArtworkRoutes {
  public static async getAll(options: Array<any>) {
    const instance = await getInstance();
    const token = localStorage.getItem('token');

    let params = '';
    options.map((x: any) => params += `${x.param}=${x.value}&`);
    
    const response = await instance.get(`/artwork?${params}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });

    return response;
  }

  public static async buy(data: any){
    const instance = await getInstance();
    const response = await instance.post('/artwork/buy', data);
    return response;
  }

  public static async getById(id: string) {
    const instance = await getInstance();
    const response = await instance.get(`/artwork/${id}`);
    return response;
  }
}