import React from 'react'
import * as PropTypes from 'prop-types'
import SettingsInterface from './SettingsPage'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isDarkMode } from 'Common/utils/browser.utils'
import * as settingActions from './settings.actions'
import { settingsInterface } from './settings.interface'
import { withRouter } from 'react-router'

const Settings = (props = settingsInterface, { t: translate }) => (
  <SettingsInterface
    darkMode={props.darkMode === 'browser' ? isDarkMode() : props.darkMode}
    saveAndCreateNew={props.saveAndCreateNew}
    autoSave={props.autoSave}
    onDarkMode={props.setDarkModeToggle}
    onSaveAndCreateNewToggle={props.setSaveAndCreateNewToggle}
    onAutoSave={props.setAutoSaveToggle}
    onClose={() => props.history.goBack()}
    translate={translate}
  />
)

Settings.contextTypes = {
  t: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}

const mapStateToProps = ({ settings = settingsInterface } = {}) => ({
  autoSave: settings.autoSave,
  darkMode: settings.darkMode,
  saveAndCreateNew: settings.saveAndCreateNew,
})

const mapDispatchToPros = (dispatch) =>
  bindActionCreators(
    {
      setAutoSaveToggle: settingActions.setAutoSaveToggle,
      setDarkModeToggle: settingActions.setDarkModeToggle,
      setSaveAndCreateNewToggle: settingActions.setSaveAndCreateNewToggle,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToPros)(withRouter(Settings))
