import React from 'react'
import { FiX } from 'react-icons/fi'
import { emptyFunc } from 'Common/utils/general.utils'

import ToggleWithDescription from 'Common/components/toggleWithDescription'

import Icon from 'Common/components/icon'

import './SettingsInterface.scss'

const SettingsInterface = ({
  onDarkMode = emptyFunc,
  onAddNote = emptyFunc,
  onAutoSave = emptyFunc,
  onClose = emptyFunc,
  translate = emptyFunc,
}) => {
  return (
    <div className="settings-interface">
      <header className="settings-interface__header">
        <h1 className="shortcuts-interface__header-title">
          {translate('Settings', '', 'page title')}
        </h1>

        <Icon
          onClick={onClose}
          tip={translate('Close this settings', '', 'button to return to all settings results')}
          addClass="settings-interface__header-close"
        >
          <FiX size="40px" />
        </Icon>
      </header>
      <main className="settings-interface__main">
        <ToggleWithDescription
          onToggle={onDarkMode}
          addClass="settings-interface__main-item"
          title={translate('Dark mode', '', 'Settings page')}
          description={translate(
            'This mode is enabled by default when your browser is in dark mode, you can enable or disable it manually',
            '',
            'settings page',
          )}
        />
        <ToggleWithDescription
          onToggle={onAddNote}
          addClass="settings-interface__main-item"
          title={translate('Add new note by default', '', 'Settings page')}
          description={translate(
            'When you finish the current mode the application could create a new one or back to note list',
            '',
            'settings page',
          )}
        />
        <ToggleWithDescription
          onToggle={onAutoSave}
          addClass="settings-interface__main-item"
          title={translate('Auto save', '', 'Settings page')}
          description={translate(
            "The note that you didn't finish the creation could be saved automatically",
            '',
            'settings page',
          )}
        />
      </main>
    </div>
  )
}

export default SettingsInterface
