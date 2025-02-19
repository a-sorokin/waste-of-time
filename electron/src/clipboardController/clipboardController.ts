import { clipboard } from 'electron';
import { ITEM_LENGTH_LIMIT } from '@e/clipboardController/constants';
import { setToClipboardStore } from '@e/stores/clipboardStore/clipboardStore';

export const initClipboardController = () => {
  setInterval(() => {
    const clipboardText = clipboard.readText().trim();
    if (!clipboardText || clipboardText.length > ITEM_LENGTH_LIMIT) return;
    setToClipboardStore(clipboardText);
  }, 500);
};

export const setItemToClipboard = (item: string) => {
  clipboard.writeText(item);
};
