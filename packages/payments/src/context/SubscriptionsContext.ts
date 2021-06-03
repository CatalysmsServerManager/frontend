import { createContext } from 'react';
import { Product, Subscription } from '@prisma/client';

export interface ISubscriptionWithProduct extends Subscription {
  product: Product;
}

interface ISubscriptionContext {
  subscriptions: ISubscriptionWithProduct[];
  setSubscriptions: React.Dispatch<ISubscriptionWithProduct[]>
}

export const SubscriptionContext = createContext<Partial<ISubscriptionContext>>({});
