import { useSnackbar } from 'notistack';
import { FC, useEffect } from 'react';
import { Return } from './return';

export const DiscordReturn: FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  /* update session */
  useEffect(() => {
    enqueueSnackbar('Successfully linked discord! 💩', { variant: 'success' });
  }, []);
  return <Return />;
};
