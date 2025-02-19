import { appWindow, createWindow } from '@e/window/createWindow/createWindow';

export const showWindow = () => {
  if (!appWindow) createWindow();
  appWindow.show();
};
