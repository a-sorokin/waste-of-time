import { setItemToClipboard } from '@e/clipboardController/clipboardController';
import { sendClipboardItems } from '@e/ipc/ipcActions';
import { appStore } from '@e/stores/appStore/appStore';
import { STORE_KEYS } from '@e/stores/appStore/constants';
import { STORE_LIMIT } from '@e/stores/clipboardStore/constants';
import { TClipboardStore } from '@e/stores/clipboardStore/types';

let clipboardItems: TClipboardStore = [];
let lastItem = '';

export const initClipboardStore = () => {
  clipboardItems = appStore.get(STORE_KEYS.CLIPBOARD_STORE_KEY) as TClipboardStore;
};

export const getClipboardItems = () => clipboardItems;

const saveToAppStore = () => {
  appStore.set(STORE_KEYS.CLIPBOARD_STORE_KEY, clipboardItems);
};

export const resetClipboardItems = () => {
  clipboardItems = [lastItem];
  saveToAppStore();
};

export const deleteItem = (index: number) => {
  clipboardItems.splice(index, 1);
  if (!clipboardItems.length && lastItem) clipboardItems.push(lastItem);
  saveToAppStore();
  if (index === 0) {
    lastItem = clipboardItems[0];
    setItemToClipboard(lastItem);
  }
};

export const setToClipboardStore = (value: string) => {
  if (value === lastItem) return;

  const itemIndex = clipboardItems.findIndex((item) => item === value);

  if (itemIndex !== -1) clipboardItems.splice(itemIndex, 1);
  clipboardItems.unshift(value);
  if (clipboardItems.length > STORE_LIMIT) clipboardItems.pop();

  lastItem = value;

  saveToAppStore();
  sendClipboardItems();
};
