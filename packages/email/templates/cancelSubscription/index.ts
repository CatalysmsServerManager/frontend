import { Template } from '../../template.type';

interface CancelSubscriptionData {
  name: string;
}
export interface CancelSubscription extends Template {
  name: 'cancelSubscription',
  data: CancelSubscriptionData;
}
