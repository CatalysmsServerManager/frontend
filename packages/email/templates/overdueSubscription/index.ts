import { Template } from '../../template.type';

interface Data {
  name: string;
  paymentLink: string;
}
export interface OverdueSubscription extends Template {
  name: 'overdueSubscription',
  data: Data;
}
