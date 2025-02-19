import { DEV_MODE } from '@e/electronConstants';
import { appWindow } from '@e/window/createWindow/createWindow';

export const initWindowExtras = () => {
  if (!DEV_MODE) {
    appWindow.setAlwaysOnTop(true, 'pop-up-menu');

    appWindow.setVisibleOnAllWorkspaces(true, {
      visibleOnFullScreen: true,
      skipTransformProcessType: true,
    });
  }
};
