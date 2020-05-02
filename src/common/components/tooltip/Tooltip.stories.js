import React from 'react'
import Tooltip from './Tooltip'
import { action } from '@storybook/addon-actions'

import { Light, Dark } from 'common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'Tooltip' }

export const tooltip = () => (
  <Light>
    <Tooltip>Hello world</Tooltip>
  </Light>
)
export const tooltipWithBigContent = () => (
  <Light>
    <Tooltip>Hello world this is a very big content</Tooltip>
  </Light>
)

export const tooltipDarkMode = () => (
  <Dark>
    <Tooltip isRemovable onRemove={action('Remove action')}>
      This is isRemovable
    </Tooltip>
  </Dark>
)
