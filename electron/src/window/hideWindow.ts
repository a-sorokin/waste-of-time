import { Menu } from 'electron';
import { DEV_MODE } from '@e/electronConstants';
import { isFirstRun } from '@e/firstRun/firstRun';
import { unblockCmdW } from '@e/globalShortcutsController';
import { sendHideWindowEvent } from '@e/ipc/ipcActions';

export const hideWindow = () => {
  unblockCmdW();
  if (isFirstRun) return;
  if (!DEV_MODE) Menu.sendActionToFirstResponder('hide:');
  sendHideWindowEvent();
};
