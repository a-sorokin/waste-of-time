import { nativeTheme } from 'electron';
import { setLoginItemSettings } from '@e/loginSettings/setLoginItemSettings';
import { appStore } from '@e/stores/appStore/appStore';
import { STORE_KEYS } from '@e/stores/appStore/constants';
import { SETTINGS_STORE_BASE, SETTINGS_STORE_KEYS, THEMES } from '@e/stores/settingsStore/constants';
import { TSettingsStore } from '@e/stores/settingsStore/types';

let settingsStore: TSettingsStore = structuredClone(SETTINGS_STORE_BASE);

export const initSettingsStore = () => {
  settingsStore = appStore.get(STORE_KEYS.SETTINGS) as TSettingsStore;

  checkSystemTheme();
  setLoginItemSettings(settingsStore[SETTINGS_STORE_KEYS.autoLaunch]);
};

const saveToAppStore = () => {
  appStore.set(STORE_KEYS.SETTINGS, settingsStore);
};

export const getSettingsStoreData = () => {
  checkSystemTheme();
  return settingsStore;
};

const checkSystemTheme = () => {
  const theme = settingsStore[SETTINGS_STORE_KEYS.theme];

  if (theme === THEMES.system) {
    settingsStore[SETTINGS_STORE_KEYS.themeValue] = nativeTheme.shouldUseDarkColors ? THEMES.dark : THEMES.light;
    return;
  }

  settingsStore[SETTINGS_STORE_KEYS.themeValue] = theme;
};

export const setTheme = (theme: THEMES) => {
  settingsStore[SETTINGS_STORE_KEYS.theme] = theme;

  checkSystemTheme();
  saveToAppStore();
};

export const setAutoLaunch = (launch: boolean) => {
  settingsStore[SETTINGS_STORE_KEYS.autoLaunch] = launch;
  saveToAppStore();
};

export const setStorageSize = (size: number) => {
  settingsStore[SETTINGS_STORE_KEYS.storageSize] = size;
  saveToAppStore();
};

export const setTray = (tray: boolean) => {
  settingsStore[SETTINGS_STORE_KEYS.tray] = tray;
  saveToAppStore();
};
