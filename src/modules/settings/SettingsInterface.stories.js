import React from 'react'
import SettingsInterface from './SettingsInterface'

import { action } from '@storybook/addon-actions'
import { Light, Dark } from 'Common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'InterfaceSettings' }

const mySettings = (
  <SettingsInterface
    onDarkMode={action('onDarkMode')}
    onAddNote={action('onAddNote')}
    onAutoSave={action('onAutoSave')}
    onClose={action('onClose')}
  />
)

export const SettingsInterfaceLight = () => <Light>{mySettings}</Light>

export const SettingsInterfaceDark = () => <Dark>{mySettings}</Dark>
