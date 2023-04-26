import { TransactionType } from '../enum/TransactionTypeEnum';

export interface TransactionInterface {
  artcoins?: number;
  transactionType?: TransactionType;
  userId?: string;
}