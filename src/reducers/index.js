import { combineReducers } from 'redux'
import { i18nState } from 'redux-i18n'

import settings from './settings'

export default combineReducers({
  settings,
  i18nState,
})
