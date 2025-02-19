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
    set(({ runningApps }) => {
      runningApps.add(appName);
      return { runningApps: structuredClone(runningApps) };
    });
  },
  closeApp: (appName) => {
    set(({ runningApps }) => {
      runningApps.delete(appName);
      return { runningApps: structuredClone(runningApps) };
    });
  },
}));
