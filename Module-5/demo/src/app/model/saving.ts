import {Customer} from './customer';
import {Period} from './period';

export interface Saving {
  id?: number;
  openDate?: string;
  sentDate?: string;
  period?: Period;
  money?: number;
  interestRate?: number;
  endow?: string;
  customer?: Customer;
}
