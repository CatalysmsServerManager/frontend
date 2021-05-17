import { FC } from 'react';
import { SnackbarProvider as Provider, SnackbarProviderProps } from 'notistack';

const snackbarOptions: Partial<SnackbarProviderProps> = {
  anchorOrigin: {
    horizontal: 'center', vertical: 'top'
  },
  autoHideDuration: 5000,
  hideIconVariant: true,
  maxSnack: 3,
  preventDuplicate: true
};

export const SnackbarProvider: FC = ({ children }) => (
  <Provider {...snackbarOptions}>
    { children}
  </Provider>
);
