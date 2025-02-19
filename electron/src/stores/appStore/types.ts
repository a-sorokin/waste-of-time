import ElectronStore from 'electron-store';
import { STORE_KEYS, STORE_MAIN_KEY } from '@e/stores/appStore/constants';
import { TClipboardStore } from '@e/stores/clipboardStore/types';
import { TPinsStoreData } from '@e/stores/pinsStore/types';
import { TSettingsStore } from '@e/stores/settingsStore/types';

export type TStoreContent = {
  [STORE_KEYS.CLIPBOARD_STORE_KEY]: TClipboardStore;
  [STORE_KEYS.PINS_STORE_KEY]: TPinsStoreData;
  [STORE_KEYS.SETTINGS]: TSettingsStore;
  [STORE_KEYS.VERSION]: number;
};

export type TStore = {
  [STORE_MAIN_KEY]: TStoreContent;
};

export type TStoreKeys = keyof TStoreContent;

export type TStoreValues = TStoreContent[TStoreKeys];

export type TAppStore = {
  get: (key: STORE_KEYS) => TStoreValues;
  init: () => void;
  set: (key: STORE_KEYS, value: TStoreValues) => void;
  storeData?: ElectronStore<TStore>;
};
