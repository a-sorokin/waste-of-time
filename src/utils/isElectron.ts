export const isElectron = (): boolean => {
  try {
    if (import.meta.env.MODE === 'web') return false;

    return (
      typeof window !== 'undefined' &&
      'ipcRenderer' in window &&
      typeof (window as { ipcRenderer?: { send: unknown } }).ipcRenderer?.send === 'function'
    );
  } catch {
    return false;
  }
};
