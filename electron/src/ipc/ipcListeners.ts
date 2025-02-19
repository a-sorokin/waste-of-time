import { app, ipcMain } from 'electron';
import { IPC_RENDERER_ACTIONS } from '@e/ipc/constants';

export const initListeners = () => {
  ipcMain.on(IPC_RENDERER_ACTIONS.CLOSE_APP, app.quit);
};
