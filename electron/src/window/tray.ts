import { Menu, Tray, nativeImage } from 'electron';
import { closeApp } from '@e/ipc/utils';
import { getSettingsStoreData } from '@e/stores/settingsStore/settingsStore';
import { showWindow } from '@e/window/showWindow';

let tray: Tray | null;

export const createTray = () => {
  if (tray) return;
  const { tray: trayEnabled } = getSettingsStoreData();
  if (!trayEnabled) return;

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Open Klembord', click: showWindow },
    { label: 'Quit', click: closeApp },
  ]);

  const icon = nativeImage.createFromPath('');
  tray = new Tray(icon);
  tray.setTitle('K');
  tray.setContextMenu(contextMenu);
};

export const destroyTray = () => {
  if (!tray) return;
  tray.destroy();
  tray = null;
};
