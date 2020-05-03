import React from 'react'
import Chip from './Chip'
import { action } from '@storybook/addon-actions'
import { Light, Dark } from 'common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'Chip' }

export const chip = () => (
  <Light>
    <Chip>Hello world</Chip>
  </Light>
)
export const chipWithBigContent = () => (
  <Light>
    <Chip>Hello world this is a very big content</Chip>
  </Light>
)

export const chipWithRemoveAction = () => (
  <Light>
    <Chip isRemovable onRemove={action('Remove action')}>
      This is isRemovable
    </Chip>
  </Light>
)
export const chipDarkMode = () => (
  <Dark>
    <Chip isRemovable onRemove={action('Remove action')}>
      This is isRemovable
    </Chip>
  </Dark>
)
