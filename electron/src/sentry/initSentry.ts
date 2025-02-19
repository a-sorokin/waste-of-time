import { sentryDsn } from '../../../sentryDsn';
import * as Sentry from '@sentry/electron/main';
import { DEV_MODE } from '@e/electronConstants';

export const initSentry = () => {
  if (DEV_MODE) return;
  Sentry.init({ dsn: sentryDsn });
};
