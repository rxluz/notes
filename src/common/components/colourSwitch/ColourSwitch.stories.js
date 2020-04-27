import React from 'react'
import ColourSwitch from './ColourSwitch'
import { action } from '@storybook/addon-actions'
import { Light, Dark } from 'Common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'ColourSwitch' }

export const colourSwitch = () => (
  <Light>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <ColourSwitch onChange={action('color changed')} />
  </Light>
)

export const colourSwitchDarkMode = () => (
  <Dark>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <ColourSwitch onChange={action('color changed')} />
  </Dark>
)
