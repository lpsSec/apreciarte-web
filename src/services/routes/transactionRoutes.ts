import { TransactionInterface } from '../../interfaces/TransactionInterface';
import { getInstance } from '../api';

export class TransactionRoutes {
  public static async create(data: TransactionInterface) {
    const instance = await getInstance();
    const response = await instance.post('/transaction', data);
    return response;
  }
}