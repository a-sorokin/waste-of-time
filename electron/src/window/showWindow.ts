import { appWindow, createWindow } from '@e/window/createWindow/createWindow';
import { getWindowSizeProps } from '@e/window/createWindow/getWindowSizeProps';

export const showWindow = () => {
  if (!appWindow) createWindow();
  appWindow.setBounds(getWindowSizeProps());
  appWindow.show();
};
