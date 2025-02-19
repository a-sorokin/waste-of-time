export enum IPC_MAIN_ACTIONS {
  CLIPBOARD_DATA = 'clipboard-data',
  CREATE_WINDOW = 'create-window',
  FIRST_RUN = 'first-run',
  HIDE_WINDOW = 'hide-window',
  PINNED_ITEMS = 'pinned-items',
  SETTINGS_STORE_DATA = 'settings-store-data',
}

export enum IPC_RENDERER_ACTIONS {
  CLEAR_HISTORY = 'clear-history',
  CLOSE_APP = 'close-app',
  CLOSE_WINDOW = 'close-window',
  DELETE_ITEM = 'delete-item',
  DELETE_PINNED_ITEM = 'delete-pinned-item',
  GET_CLIPBOARD_DATA = 'get-clipboard-data',
  GET_PINNED_ITEMS = 'get-pinned-items',
  OPEN_LINK = 'open-link',
  PIN_ITEM = 'pin-item',
  REQUEST_FIRST_RUN = 'request-first-run',
  REQUEST_SETTINGS = 'request-settings',
  SELECT_PINNED_ITEM = 'select-pinned-item',
  SET_AUTO_LAUNCH = 'set-auto-launch',
  SET_CLIPBOARD_ITEM = 'set-clipboard-item',
  SET_FIRST_RUN = 'set-first-run',
  SET_THEME = 'set-theme',
  SET_TRAY = 'set-tray',
}
