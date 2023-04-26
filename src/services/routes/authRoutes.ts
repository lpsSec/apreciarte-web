import { UserLoginInterface } from '../../interfaces/UserLoginInterface';
import { UserRegisterInterface } from '../../interfaces/UserRegisterInterface';
import { getInstance } from '../api';

export class AuthRoutes {
  public static async register(data: UserRegisterInterface) {
    const instance = await getInstance();
    const response = instance.post('/auth/register', data);
    return response;
  }

  public static async login(data: UserLoginInterface) {
    const instance = await getInstance();
    const response = await instance.post('/auth/login', data);
    return response;
  }
}