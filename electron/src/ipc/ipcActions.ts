import { isFirstRun } from '@e/firstRun/firstRun';
import { IPC_MAIN_ACTIONS } from '@e/ipc/constants';
import { getClipboardItems } from '@e/stores/clipboardStore/clipboardStore';
import { getPinnedItems } from '@e/stores/pinsStore/pinsStore';
import { getSettingsStoreData } from '@e/stores/settingsStore/settingsStore';
import { appWindow } from '@e/window/createWindow/createWindow';

export const sendClipboardItems = () => {
  appWindow.webContents.send(IPC_MAIN_ACTIONS.CLIPBOARD_DATA, getClipboardItems());
};

export const sendPinnedItems = () => {
  appWindow.webContents.send(IPC_MAIN_ACTIONS.PINNED_ITEMS, getPinnedItems());
};

export const sendCreateWindowEvent = () => {
  appWindow.webContents.send(IPC_MAIN_ACTIONS.CREATE_WINDOW);
};

export const sendHideWindowEvent = () => {
  appWindow.webContents.send(IPC_MAIN_ACTIONS.HIDE_WINDOW);
};

export const sendSettingsStoreData = () => {
  appWindow.webContents.send(IPC_MAIN_ACTIONS.SETTINGS_STORE_DATA, getSettingsStoreData());
};

export const sendFirstRun = () => {
  appWindow.webContents.send(IPC_MAIN_ACTIONS.FIRST_RUN, isFirstRun);
};
