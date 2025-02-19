import { appStore } from '@e/stores/appStore/appStore';
import { STORE_KEYS } from '@e/stores/appStore/constants';
import { PINNED_ITEMS_LIMIT } from '@e/stores/pinsStore/constants';
import { TPinsStoreData } from '@e/stores/pinsStore/types';

let pinnedItems: TPinsStoreData = [];

export const initPinsStore = () => {
  pinnedItems = appStore.get(STORE_KEYS.PINS_STORE_KEY) as TPinsStoreData;
};

const saveToAppStore = () => {
  appStore.set(STORE_KEYS.PINS_STORE_KEY, pinnedItems);
};

export const getPinnedItems = () => pinnedItems;

export const deletePinnedItem = (index: number) => {
  pinnedItems.splice(index, 1);
  saveToAppStore();
};

export const pinItemToStore = (item: string) => {
  const itemIndex = pinnedItems.findIndex((pinnedItem) => pinnedItem === item);
  if (itemIndex !== -1) return pinnedItems;
  pinnedItems.unshift(item);
  if (pinnedItems.length > PINNED_ITEMS_LIMIT) pinnedItems.pop();
  saveToAppStore();
};

export const rearrangePins = (pin: string) => {
  const index = pinnedItems.findIndex((pinnedItem) => pinnedItem === pin);
  if (index === -1) return;
  pinnedItems.splice(index, 1);
  pinnedItems.unshift(pin);
};
