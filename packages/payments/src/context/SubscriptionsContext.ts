import { createContext } from 'react';
import { Product, Subscription } from '@prisma/client';

export interface SubscriptionWithProduct extends Subscription {
  product: Product;
}

export interface ISubscriptionContext {
  subscriptions: SubscriptionWithProduct[];
  setSubscriptions: React.Dispatch<SubscriptionWithProduct[]>
}

export const SubscriptionContext = createContext<ISubscriptionContext>(undefined!);
