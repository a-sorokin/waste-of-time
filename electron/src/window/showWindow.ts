import { blockCmdW } from '@e/globalShortcutsController';
import { sendCreateWindowEvent } from '@e/ipc/ipcActions';
import { appWindow, createWindow } from '@e/window/createWindow/createWindow';
import { getWindowSizeProps } from '@e/window/createWindow/getWindowSizeProps';

export const showWindow = () => {
  blockCmdW();
  if (!appWindow) createWindow();
  appWindow.setBounds(getWindowSizeProps());
  appWindow.show();
  sendCreateWindowEvent();
};
