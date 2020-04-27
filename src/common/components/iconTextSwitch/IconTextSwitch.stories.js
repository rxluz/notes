import React from 'react'
import IconTextSwitch from './IconTextSwitch'
import { action } from '@storybook/addon-actions'
import { Light, Dark } from 'Common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'IconTextSwitch' }

const OPTIONS = []
OPTIONS.push({ value: 'TODAY', text: 'Today' })
OPTIONS.push({ value: 'TOMORROW', text: 'Tomorrow' })
OPTIONS.push({ value: 'TWO_DAYS', text: 'Two days' })
OPTIONS.push({ value: 'NEXT_WEEK', text: 'Next week' })

export const iconTextSwitch = () => (
  <Light>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <IconTextSwitch onChange={action('color changed')} options={OPTIONS} />
  </Light>
)
export const iconTextSwitchActive = () => (
  <Light>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <IconTextSwitch isActive={true} onChange={action('color changed')} options={OPTIONS} />
  </Light>
)

export const iconTextSwitchDarkMode = () => (
  <Dark>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <IconTextSwitch onChange={action('color changed')} options={OPTIONS} />
  </Dark>
)

export const iconTextSwitchActiveDarkMode = () => (
  <Dark>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <IconTextSwitch isActive={true} onChange={action('color changed')} options={OPTIONS} />
  </Dark>
)
