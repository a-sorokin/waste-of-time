import Store from 'electron-store';
import { STORES_VERSION } from '@e/electronConstants';
import { STORE_BASIC_STRUCTURE, STORE_KEYS, STORE_MAIN_KEY } from '@e/stores/appStore/constants';
import { TAppStore, TStore, TStoreValues } from '@e/stores/appStore/types';

const init = () => {
  initStoreData();
  checkVersion();
};

const initStoreData = () => {
  if (appStore.storeData) return;

  const storeData = new Store<TStore>();
  const previousData = storeData.get(STORE_MAIN_KEY);

  appStore.storeData = storeData;

  if (!previousData) {
    storeData.set(STORE_MAIN_KEY, structuredClone(STORE_BASIC_STRUCTURE));
  }
};

const checkVersion = () => {
  const storeData = appStore.storeData?.get(STORE_MAIN_KEY);
  const version = storeData ? storeData[STORE_KEYS.VERSION] : undefined;

  if (version === STORES_VERSION) return;

  storeData![STORE_KEYS.SETTINGS] = STORE_BASIC_STRUCTURE[STORE_KEYS.SETTINGS];
  storeData![STORE_KEYS.VERSION] = STORES_VERSION;
  appStore.storeData!.set(STORE_MAIN_KEY, storeData);
};

const getStoreData = (key: STORE_KEYS): TStoreValues => {
  return appStore.storeData!.get(STORE_MAIN_KEY)[key];
};

const setToStore = (key: STORE_KEYS, value: TStoreValues) => {
  const data = appStore.storeData!.get(STORE_MAIN_KEY);
  appStore.storeData!.set(STORE_MAIN_KEY, { ...data, [key]: value });
};

export const appStore: TAppStore = {
  storeData: undefined,
  init,
  get: getStoreData,
  set: setToStore,
};
