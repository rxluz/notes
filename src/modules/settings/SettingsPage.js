import React from 'react'
import { FiX } from 'react-icons/fi'

import { settingsPageInterface } from './settings.interface'

import ToggleWithDescription from 'common/components/toggleWithDescription'

import './SettingsPage.scss'

const SettingsPage = (props = settingsPageInterface) => (
  <div className="settings-interface">
    <header className="settings-interface__header">
      <h1 className="shortcuts-interface__header-title">
        {props.translate('Settings', '', 'page title')}
      </h1>

      <button
        onClick={props.onClose}
        aria-label={props.translate(
          'Close this settings',
          '',
          'button to return to all settings results',
        )}
        className="settings-interface__header-close"
      >
        <FiX size="32px" />
      </button>
    </header>
    <main className="settings-interface__main">
      <ToggleWithDescription
        isActive={props.darkMode}
        onToggle={props.onDarkMode}
        addClass="settings-interface__main-item"
        title={props.translate('Dark mode', '', 'Settings page')}
        description={props.translate(
          'This mode is enabled by default when your browser is in dark mode, you can enable or disable it manually',
          '',
          'settings page',
        )}
      />
      <ToggleWithDescription
        isActive={props.saveAndCreateNew}
        onToggle={props.onSaveAndCreateNewToggle}
        addClass="settings-interface__main-item"
        title={props.translate('Add new note by default', '', 'Settings page')}
        description={props.translate(
          'When you finish the current mode the application could create a new one or back to note list',
          '',
          'settings page',
        )}
      />
      <ToggleWithDescription
        isActive={props.autoSave}
        onToggle={props.onAutoSave}
        addClass="settings-interface__main-item"
        title={props.translate('Auto save', '', 'Settings page')}
        description={props.translate(
          "The note that you didn't finish the creation could be saved automatically",
          '',
          'settings page',
        )}
      />
    </main>
  </div>
)

export default SettingsPage
