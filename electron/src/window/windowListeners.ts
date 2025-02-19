import { appWindow } from '@e/window/createWindow/createWindow';
import { hideWindow } from '@e/window/hideWindow';

export const initWindowListeners = () => {
  appWindow.on('blur', hideWindow);
};
