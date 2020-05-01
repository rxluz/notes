import React from 'react'
import ShortcutsPage from './ShortcutsPage'

import { action } from '@storybook/addon-actions'
import { Light, Dark } from 'Common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'InterfaceShortcuts' }

const myShortcuts = (
  <ShortcutsPage
    translate={(text) => text}
    onDarkMode={action('onDarkMode')}
    onAddNote={action('onAddNote')}
    onAutoSave={action('onAutoSave')}
    onClose={action('onClose')}
  />
)

export const ShortcutsInterfaceLight = () => <Light>{myShortcuts}</Light>

export const ShortcutsInterfaceDark = () => <Dark>{myShortcuts}</Dark>
