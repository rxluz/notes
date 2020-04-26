import { i18nState } from 'redux-i18n'
import { combineReducers } from 'redux'

import settings from './settings'
import notes from './notes'

export default combineReducers({
  settings,
  notes,
  i18nState,
})
