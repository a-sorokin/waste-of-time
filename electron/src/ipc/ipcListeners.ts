import { ipcMain } from 'electron';
import { setFirstRun } from '@e/firstRun/firstRun';
import { IPC_RENDERER_ACTIONS } from '@e/ipc/constants';
import { sendClipboardItems, sendFirstRun, sendPinnedItems, sendSettingsStoreData } from '@e/ipc/ipcActions';
import {
  clearHistory,
  closeApp,
  deleteItemHandler,
  deletePinnedItemHandler,
  openLinkFromRenderer,
  pinItem,
  selectPinnedItem,
  setAutoLaunchIpc,
  setClipboardItem,
  setThemeIpcMain,
  setTrayIpc,
} from '@e/ipc/utils';
import { hideWindow } from '@e/window/hideWindow';

export const initListeners = () => {
  ipcMain.on(IPC_RENDERER_ACTIONS.CLEAR_HISTORY, clearHistory);
  ipcMain.on(IPC_RENDERER_ACTIONS.CLOSE_APP, closeApp);
  ipcMain.on(IPC_RENDERER_ACTIONS.CLOSE_WINDOW, hideWindow);
  ipcMain.on(IPC_RENDERER_ACTIONS.DELETE_ITEM, deleteItemHandler);
  ipcMain.on(IPC_RENDERER_ACTIONS.DELETE_PINNED_ITEM, deletePinnedItemHandler);
  ipcMain.on(IPC_RENDERER_ACTIONS.GET_CLIPBOARD_DATA, sendClipboardItems);
  ipcMain.on(IPC_RENDERER_ACTIONS.GET_PINNED_ITEMS, sendPinnedItems);
  ipcMain.on(IPC_RENDERER_ACTIONS.OPEN_LINK, openLinkFromRenderer);
  ipcMain.on(IPC_RENDERER_ACTIONS.PIN_ITEM, pinItem);
  ipcMain.on(IPC_RENDERER_ACTIONS.REQUEST_SETTINGS, sendSettingsStoreData);
  ipcMain.on(IPC_RENDERER_ACTIONS.SELECT_PINNED_ITEM, selectPinnedItem);
  ipcMain.on(IPC_RENDERER_ACTIONS.SET_CLIPBOARD_ITEM, setClipboardItem);
  ipcMain.on(IPC_RENDERER_ACTIONS.SET_THEME, setThemeIpcMain);
  ipcMain.on(IPC_RENDERER_ACTIONS.SET_AUTO_LAUNCH, setAutoLaunchIpc);
  ipcMain.on(IPC_RENDERER_ACTIONS.SET_FIRST_RUN, setFirstRun);
  ipcMain.on(IPC_RENDERER_ACTIONS.REQUEST_FIRST_RUN, sendFirstRun);
  ipcMain.on(IPC_RENDERER_ACTIONS.SET_TRAY, setTrayIpc);
};
