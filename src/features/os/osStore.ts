import { create } from 'zustand';
import { APPS } from '@/features/os/constants';

export type OsStore = {
  runningApps: Set<APPS>;

  runApp: (appName: APPS) => void;
  closeApp: (appName: APPS) => void;
};

export const useOsStore = create<OsStore>((set) => ({
  runningApps: new Set(),

  runApp: (appName) => {
    set((state) => {
      state.runningApps.add(appName);
      return state;
    });
  },
  closeApp: (appName) => {
    set((state) => {
      state.runningApps.delete(appName);
      return state;
    });
  },
}));
