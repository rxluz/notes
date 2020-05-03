import React from 'react'
import SettingsInterface from './SettingsPage'

import { action } from '@storybook/addon-actions'
import { Light, Dark } from 'common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'InterfaceSettings' }

const mySettings = (
  <SettingsInterface
    translate={(text) => text}
    onDarkMode={action('onDarkMode')}
    onAddNote={action('onAddNote')}
    onAutoSave={action('onAutoSave')}
    onClose={action('onClose')}
  />
)

export const SettingsInterfaceLight = () => <Light>{mySettings}</Light>

export const SettingsInterfaceDark = () => <Dark>{mySettings}</Dark>
