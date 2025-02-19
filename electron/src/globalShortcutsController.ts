import { globalShortcut } from 'electron';
import { DEV_MODE } from '@e/electronConstants';
import { showWindow } from '@e/window/showWindow';

const CMD_SHIFT_V = 'CmdOrCtrl+Shift+V';
const CMD_W = 'CmdOrCtrl+W';

export const initGlobalShortcutsController = () => {
  if (DEV_MODE) return;
  globalShortcut.register(CMD_SHIFT_V, showWindow);
};

export const unregisterGlobalShortcuts = () => {
  globalShortcut.unregisterAll();
};

export const blockCmdW = () => {
  globalShortcut.register(CMD_W, () => {
    // do nothing
  });
};

export const unblockCmdW = () => {
  globalShortcut.unregister(CMD_W);
};
