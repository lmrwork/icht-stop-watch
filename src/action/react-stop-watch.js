export const goHome = (history) => ({
  type: 'GO_HOME',
  history
});

export const goSetting= (history) => ({
  type: 'GO_SETTING',
  history
});

export const saveWatchState= (watchState) => ({
  type: 'SAVE_WATCH_STATE',
  watchState
});