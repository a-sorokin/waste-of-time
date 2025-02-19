import { BrowserWindow } from 'electron';
import { getWindowProps } from '@e/window/createWindow/getWindowProps';
import { initWindowExtras } from '@e/window/createWindow/initWindowExtras';
import { setWindowUrl } from '@e/window/createWindow/setWindowUrl';

export let appWindow: BrowserWindow;

export const createWindow = () => {
  appWindow = new BrowserWindow(getWindowProps());
  initWindowExtras();
  setWindowUrl();
};
