import { SETTINGS_STORE_KEYS, THEMES } from '@e/stores/settingsStore/constants';

export type TSettingsStore = {
  [SETTINGS_STORE_KEYS.theme]: THEMES;
  [SETTINGS_STORE_KEYS.themeValue]: TThemeValue;
  [SETTINGS_STORE_KEYS.autoLaunch]: boolean;
  [SETTINGS_STORE_KEYS.storageSize]: number;
  [SETTINGS_STORE_KEYS.tray]: boolean;
};

export type TThemeValue = THEMES.dark | THEMES.light;
