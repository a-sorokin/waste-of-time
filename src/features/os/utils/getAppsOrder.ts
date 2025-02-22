import { AppsOrder, RunningApps } from '@/features/os/types';

export const getAppsOrder = (runningApps: RunningApps): AppsOrder => {
  const appsOrder = {} as AppsOrder;
  let i = 0;

  for (const app of runningApps) {
    appsOrder[app] = i;
    i++;
  }

  return appsOrder;
};
