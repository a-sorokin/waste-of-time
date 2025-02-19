import path from 'node:path';
import { appWindow } from '@e/window/createWindow/createWindow';
import { RENDERER_DIST, VITE_DEV_SERVER_URL } from '../../../main';

export const setWindowUrl = () => {
  if (VITE_DEV_SERVER_URL) return appWindow.loadURL(VITE_DEV_SERVER_URL);
  appWindow.loadFile(path.join(RENDERER_DIST, 'index.html'));
};
