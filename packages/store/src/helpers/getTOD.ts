import { DateTime } from 'luxon';

export function getTOD() {
  const hour = DateTime.local().hour; // (pc time)

  switch (true) {
    case (hour < 6):
      return 'Good night';

    case (hour > 6 && hour < 12):
      return 'Good morning';

    case (hour < 17):
      return 'Good afternoon';

    case (hour >= 17 && hour <= 23):
      return 'Good evening';
  }
};
