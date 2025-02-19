import { app } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { initListeners } from '@e/ipc/ipcListeners';
import { createWindow } from '@e/window/createWindow/createWindow';
import { showWindow } from '@e/window/showWindow';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname, '..');

export const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL;
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist');

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST;

app.whenReady().then(() => {
  createWindow();
  initListeners();
});

app.on('will-quit', () => {});

app.on('activate', () => {
  showWindow();
});
