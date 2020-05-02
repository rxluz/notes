import { emptyFunc } from 'common/utils/general.utils'

export const settingsInterface = {
  setSaveAndCreateNewToggle: emptyFunc,
  setDarkModeToggle: emptyFunc,
  setAutoSaveToggle: emptyFunc,
  autoSave: true,
  darkMode: 'browser',
  saveAndCreateNew: true,
}

export const settingsPageInterface = {
  darkMode: true,
  saveAndCreateNew: true,
  autoSave: true,
  onDarkMode: emptyFunc,
  onSaveAndCreateNewToggle: emptyFunc,
  onAutoSave: emptyFunc,
  onClose: emptyFunc,
  translate: emptyFunc,
}
