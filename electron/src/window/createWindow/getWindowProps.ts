import { BrowserWindowConstructorOptions } from 'electron';
import path from 'node:path';
import { DEV_MODE } from '@e/constants';
import { __dirname } from '../../../main';

export const getWindowProps = () => {
  return {
    icon: path.join(process.env.VITE_PUBLIC, 'icon.icns'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      devTools: true,
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
