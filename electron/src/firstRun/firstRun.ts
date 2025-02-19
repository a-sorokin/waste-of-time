import { IpcMainEvent } from 'electron';
import { DEV_MODE } from '@e/electronConstants';
import { closeWindow } from '@e/window/createWindow/closeWindow';
import { createWindow } from '@e/window/createWindow/createWindow';
import { hideWindow } from '@e/window/hideWindow';

export let isFirstRun = !DEV_MODE;

export const setFirstRun = (_e: IpcMainEvent, value: boolean) => {
  isFirstRun = value;
  if (isFirstRun) return;
  closeWindow();
  createWindow();
  hideWindow();
};
