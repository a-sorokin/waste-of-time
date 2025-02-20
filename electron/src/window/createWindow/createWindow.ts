import { BrowserWindow } from 'electron';
import { getWindowProps } from '@e/window/createWindow/getWindowProps';
import { setWindowUrl } from '@e/window/createWindow/setWindowUrl';

export let appWindow: BrowserWindow;

export const createWindow = () => {
  appWindow = new BrowserWindow(getWindowProps());
  appWindow.maximize();
  setWindowUrl();
};
