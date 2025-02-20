import { BrowserWindowConstructorOptions } from 'electron';
import path from 'node:path';
import { DEV_MODE } from '@e/constants';
import { VITE_DEV_SERVER_URL, __dirname } from '../../../main';

export const getWindowProps = () => {
  return {
    icon: path.join(process.env.VITE_PUBLIC, 'icon.icns'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      devTools: Boolean(VITE_DEV_SERVER_URL),
    },
    resizable: true,
    movable: true,
    minimizable: true,
    maximizable: true,
    fullscreen: !DEV_MODE,
    show: false,
    closable: true,
    frame: false,
  } as BrowserWindowConstructorOptions;
};
