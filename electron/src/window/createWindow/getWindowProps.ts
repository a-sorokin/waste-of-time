import { BrowserWindowConstructorOptions } from 'electron';
import path from 'node:path';
import { getWindowSizeProps } from '@e/window/createWindow/getWindowSizeProps';
import { VITE_DEV_SERVER_URL, __dirname } from '../../../main';

export const getWindowProps = () => {
  const sizeAndPosition = getWindowSizeProps();

  return {
    icon: path.join(process.env.VITE_PUBLIC, 'icon.icns'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      devTools: Boolean(VITE_DEV_SERVER_URL),
    },
    ...sizeAndPosition,
    resizable: false,
    movable: false,
    minimizable: false,
    maximizable: false,
    closable: true,
    frame: false,
    transparent: true,
    vibrancy: 'popover',
  } as BrowserWindowConstructorOptions;
};
