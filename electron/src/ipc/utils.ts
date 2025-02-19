import { IpcMainEvent, app, shell } from 'electron';
import { setItemToClipboard } from '@e/clipboardController/clipboardController';
import { sendClipboardItems, sendPinnedItems, sendSettingsStoreData } from '@e/ipc/ipcActions';
import { setLoginItemSettings } from '@e/loginSettings/setLoginItemSettings';
import { deleteItem, resetClipboardItems } from '@e/stores/clipboardStore/clipboardStore';
import { deletePinnedItem, pinItemToStore, rearrangePins } from '@e/stores/pinsStore/pinsStore';
import { THEMES } from '@e/stores/settingsStore/constants';
import { setAutoLaunch, setTheme, setTray } from '@e/stores/settingsStore/settingsStore';
import { hideWindow } from '@e/window/hideWindow';
import { createTray, destroyTray } from '@e/window/tray';

export const clearHistory = () => {
  resetClipboardItems();
  sendClipboardItems();
};

export const closeApp = app.quit;

export const setClipboardItem = (_e: IpcMainEvent, item: string) => {
  setItemToClipboard(item);
  hideWindow();
};

export const pinItem = (_e: IpcMainEvent, item: string) => {
  pinItemToStore(item);
  sendPinnedItems();
};

export const deleteItemHandler = (_e: IpcMainEvent, index: number) => {
  deleteItem(index);
  sendClipboardItems();
};

export const deletePinnedItemHandler = (_e: IpcMainEvent, index: number) => {
  deletePinnedItem(index);
  sendPinnedItems();
};

export const openLinkFromRenderer = (_e: IpcMainEvent, link: string) => {
  shell.openExternal(link);
};

export const selectPinnedItem = (_e: IpcMainEvent, item: string) => {
  setItemToClipboard(item);
  hideWindow();
  rearrangePins(item);
  sendPinnedItems();
};

export const setThemeIpcMain = (_e: IpcMainEvent, theme: THEMES) => {
  setTheme(theme);
  sendSettingsStoreData();
};

export const setAutoLaunchIpc = (_e: IpcMainEvent, launch: boolean) => {
  setAutoLaunch(launch);
  setLoginItemSettings(launch);
  sendSettingsStoreData();
};

export const setTrayIpc = (_e: IpcMainEvent, tray: boolean) => {
  setTray(tray);
  tray ? createTray() : destroyTray();
  sendSettingsStoreData();
};
