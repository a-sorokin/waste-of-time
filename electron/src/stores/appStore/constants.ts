import { STORES_VERSION } from '@e/electronConstants';
import { SETTINGS_STORE_BASE } from '@e/stores/settingsStore/constants';

export const STORE_MAIN_KEY = 'store';

export enum STORE_KEYS {
  CLIPBOARD_STORE_KEY = 'clipboard',
  PINS_STORE_KEY = 'pins',
  SETTINGS = 'settings',
  VERSION = 'version',
}

export const STORE_BASIC_STRUCTURE = {
  [STORE_KEYS.CLIPBOARD_STORE_KEY]: [],
  [STORE_KEYS.PINS_STORE_KEY]: [],
  [STORE_KEYS.SETTINGS]: SETTINGS_STORE_BASE,
  [STORE_KEYS.VERSION]: STORES_VERSION,
} as const;
