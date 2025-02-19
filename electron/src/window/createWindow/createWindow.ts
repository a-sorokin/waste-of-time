import { BrowserWindow, app } from 'electron';
import { DEV_MODE } from '@e/electronConstants';
import { isFirstRun } from '@e/firstRun/firstRun';
import { getWindowProps } from '@e/window/createWindow/getWindowProps';
import { initWindowExtras } from '@e/window/createWindow/initWindowExtras';
import { setWindowUrl } from '@e/window/createWindow/setWindowUrl';
import { initWindowListeners } from '@e/window/windowListeners';

export let appWindow: BrowserWindow;

export const createWindow = () => {
  if (!DEV_MODE && !isFirstRun) app.dock.hide();

  appWindow = new BrowserWindow(getWindowProps());
  initWindowListeners();
  initWindowExtras();
  setWindowUrl();
};
