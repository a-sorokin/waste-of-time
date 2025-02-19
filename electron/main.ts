import { initSentry } from '@e/sentry/initSentry';
import { app } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { initClipboardController } from '@e/clipboardController/clipboardController';
import { initGlobalShortcutsController, unregisterGlobalShortcuts } from '@e/globalShortcutsController';
import { initListeners } from '@e/ipc/ipcListeners';
import { appStore } from '@e/stores/appStore/appStore';
import { initClipboardStore } from '@e/stores/clipboardStore/clipboardStore';
import { initPinsStore } from '@e/stores/pinsStore/pinsStore';
import { initSettingsStore } from '@e/stores/settingsStore/settingsStore';
import { createWindow } from '@e/window/createWindow/createWindow';
import { showWindow } from '@e/window/showWindow';
import { createTray } from '@e/window/tray';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname, '..');

export const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL;
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist');

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST;

initSentry();

app.whenReady().then(() => {
  createWindow();
  appStore.init();
  initClipboardStore();
  initPinsStore();
  initSettingsStore();
  initListeners();
  initClipboardController();
  initGlobalShortcutsController();
  createTray();
});

app.on('will-quit', () => {
  unregisterGlobalShortcuts();
});

app.on('activate', () => {
  showWindow();
});
