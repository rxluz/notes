import React from 'react'
import { FiX } from 'react-icons/fi'
import { emptyFunc } from 'Common/utils/general.utils'

import KeyShortcutInfo from 'Common/components/keyShortcutInfo'

import Icon from 'Common/components/icon'

import './ShortcutsInterface.scss'

const ShortcutsInterface = ({
  onDarkMode = emptyFunc,
  onAddNote = emptyFunc,
  onAutoSave = emptyFunc,
  onClose = emptyFunc,
  translate = emptyFunc,
}) => (
  <div className="shortcuts-interface">
    <header className="shortcuts-interface__header">
      <h1 class="shortcuts-interface__header-title">{translate('Shortcuts', '', 'page title')}</h1>

      <Icon
        onClick={onClose}
        tip={translate('Close this shortcuts', '', 'button to return to all shortcuts results')}
        addClass="shortcuts-interface__header-close"
      >
        <FiX size="40px" />
      </Icon>
    </header>
    <main className="shortcuts-interface__main">
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['control', 'h']}
        description={translate('Open the shortcut list', '', 'shortcut interface')}
      />
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['shift', 'enter']}
        description={translate('Save the open note and add a new one', '', 'shortcut interface')}
      />
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['control', 'x']}
        description={translate('Close', '', 'shortcut interface')}
      />
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['control', 'r']}
        description={translate('Deletes the open note', '', 'shortcut interface')}
      />
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['control', 'd']}
        description={translate('Set due date', '', 'shortcut interface')}
      />
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['control', 's']}
        description={translate('Open the settings page', '', 'shortcut interface')}
      />
    </main>
  </div>
)

export default ShortcutsInterface
