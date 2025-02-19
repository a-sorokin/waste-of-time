import { app } from 'electron';
import { DEV_MODE } from '@e/electronConstants';

export const setLoginItemSettings = (openAtLogin: boolean) => {
  if (DEV_MODE) return;

  app.setLoginItemSettings({
    openAtLogin: openAtLogin,
  });
};
