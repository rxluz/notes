export const setAutoSaveToggle = () => (dispatch) =>
  dispatch({
    type: 'SETTINGS_TOGGLE_AUTO_SAVE',
  })

export const setDarkModeToggle = () => (dispatch) =>
  dispatch({
    type: 'SETTINGS_TOGGLE_DARK_MODE',
  })

export const setSaveAndCreateNewToggle = () => (dispatch) =>
  dispatch({
    type: 'SETTINGS_TOGGLE_SAVE_CREATE_NEW',
  })
