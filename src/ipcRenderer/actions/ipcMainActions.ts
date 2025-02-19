import { IPC_RENDERER_ACTIONS } from '@e/ipc/constants';

const { ipcRenderer } = window;

export const closeApp = () => ipcRenderer.send(IPC_RENDERER_ACTIONS.CLOSE_APP);
