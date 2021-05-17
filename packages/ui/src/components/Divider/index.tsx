import { FC } from 'react';

export interface DividerProps {
  orientation: 'horizontal' | 'vertical';
}

export const Divider: FC<DividerProps> = () => {
  return (
    <div>divider</div>
  );
};
