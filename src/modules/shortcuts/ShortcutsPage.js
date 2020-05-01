import React from 'react'
import { FiX } from 'react-icons/fi'
import { emptyFunc } from 'Common/utils/general.utils'

import KeyShortcutInfo from 'Common/components/keyShortcutInfo'

import Icon from 'Common/components/icon'

import './ShortcutsPage.scss'

const ShortcutsInterface = ({ onClose = emptyFunc, translate = emptyFunc } = {}) => (
  <div className="shortcuts-interface">
    <header className="shortcuts-interface__header">
      <h1 class="shortcuts-interface__header-title">{translate('Shortcuts', '', 'page title')}</h1>

      <Icon
        onClick={onClose}
        tip={translate('Close this shortcuts', '', 'button to return to all shortcuts results')}
        addClass="shortcuts-interface__header-close"
      >
        <FiX size="32px" />
      </Icon>
    </header>
    <main className="shortcuts-interface__main">
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['alt', 'n']}
        description={translate('Create new note', '', 'shortcut interface')}
      />
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['alt', 'p']}
        description={translate('Open the settings page', '', 'shortcut interface')}
      />
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['alt', 'h']}
        description={translate('Open the shortcuts list', '', 'shortcut interface')}
      />
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['alt', 's']}
        description={translate('Search note', '', 'shortcut interface')}
      />
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['alt', 'a']}
        description={translate('List all note', '', 'shortcut interface')}
      />
      <KeyShortcutInfo
        addClass="shortcuts-interface__main-item"
        keys={['shift', 'enter']}
        description={translate('Save this note and add a new one', '', 'shortcut interface')}
      />
    </main>
  </div>
)

export default ShortcutsInterface
