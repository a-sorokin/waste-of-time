import { create } from 'zustand';
import { APPS } from '@/features/os/constants';
import { AppsOrder, RunningApps } from '@/features/os/types';
import { getAppsOrder } from '@/features/os/utils/getAppsOrder';

export type OsStore = {
  runningApps: RunningApps;
  appsOrder: AppsOrder;

  runApp: (appName: APPS) => void;
  closeApp: (appName: APPS) => void;
  selectApp: (appName: APPS) => void;
  setAppsOrder: () => void;
};

export const useOsStore = create<OsStore>((set, get) => ({
  runningApps: new Set(),
  appsOrder: {} as AppsOrder,

  runApp: (appName) => {
    set(({ runningApps }) => {
      runningApps.add(appName);
      return { runningApps: structuredClone(runningApps) };
    });
    get().setAppsOrder();
  },

  closeApp: (appName) => {
    set(({ runningApps }) => {
      runningApps.delete(appName);
      return { runningApps: structuredClone(runningApps) };
    });
  },

  selectApp: (appName) => {
    set(({ runningApps }) => {
      runningApps.delete(appName);
      runningApps.add(appName);
      return { runningApps: structuredClone(runningApps) };
    });
    get().setAppsOrder();
  },

  setAppsOrder: () => {
    set(({ runningApps }) => {
      return { appsOrder: getAppsOrder(runningApps) };
    });
  },
}));
