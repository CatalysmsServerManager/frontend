import { FC, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { NetworkDetectorOfflineSnack, NetworkDetectorOnlineSnack } from './NetworkDetectorSnacks';

export const NetworkDetector: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  // const [current, setCurrent] = useState();

  function hasNetwork(online: boolean) {
    if (online) {
      enqueueSnackbar('Your network is back online!', {
        variant: 'success',
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
        content: (key, message) => <NetworkDetectorOnlineSnack id={key} message={message} />
      });
    } else { // offline
      // TODO: make this persistent, with custom button and custom child
      enqueueSnackbar('You are currently offline.', {
        variant: 'info',
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
        persist: true,
        content: (key, message) => <NetworkDetectorOfflineSnack id={key} message={message} />
      });
    }
  }

  useEffect(() => {
    window.addEventListener('offline', () => hasNetwork(false));
    window.addEventListener('online', () => hasNetwork(true));

    // clean up
    return () => {
      window.removeEventListener('online', () => { });
      window.removeEventListener('offline', () => { });
    };
  }, []);

  return null;
};
