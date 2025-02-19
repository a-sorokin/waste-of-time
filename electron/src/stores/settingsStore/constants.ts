import { STORE_LIMIT } from '@e/stores/clipboardStore/constants';
import { TSettingsStore } from '@e/stores/settingsStore/types';

export enum THEMES {
  dark = 'dark',
  light = 'light',
  system = 'system',
}

export enum SETTINGS_STORE_KEYS {
  theme = 'theme',
  themeValue = 'themeValue',
  autoLaunch = 'autoLaunch',
  storageSize = 'storageSize',
  tray = 'tray',
}

export const SETTINGS_STORE_BASE: TSettingsStore = {
  [SETTINGS_STORE_KEYS.theme]: THEMES.system,
  [SETTINGS_STORE_KEYS.themeValue]: THEMES.dark,
  [SETTINGS_STORE_KEYS.autoLaunch]: true,
  [SETTINGS_STORE_KEYS.storageSize]: STORE_LIMIT,
  [SETTINGS_STORE_KEYS.tray]: true,
};
