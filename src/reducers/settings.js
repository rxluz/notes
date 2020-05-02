import { setSelector } from 'common/utils/state.utils'

const defaultSettings = () => ({
  darkMode: 'browser',
  saveAndCreateNew: false,
  autoSave: false,
})

const list = (state) => ({
  SETTINGS_TOGGLE_AUTO_SAVE: () => ({ ...state, autoSave: !state.autoSave }),
  SETTINGS_TOGGLE_DARK_MODE: () => ({ ...state, darkMode: !state.darkMode }),
  SETTINGS_TOGGLE_SAVE_CREATE_NEW: () => ({ ...state, saveAndCreateNew: !state.saveAndCreateNew }),
})

export default setSelector(list, defaultSettings())
