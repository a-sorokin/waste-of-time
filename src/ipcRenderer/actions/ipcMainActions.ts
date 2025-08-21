import { IPC_RENDERER_ACTIONS } from '@e/ipc/constants';

export const closeApp = () => {
  if (typeof window !== 'undefined' && 'ipcRenderer' in window) {
    const { ipcRenderer } = window as { ipcRenderer: { send: (channel: string) => void } };
    ipcRenderer.send(IPC_RENDERER_ACTIONS.CLOSE_APP);
  }
};
