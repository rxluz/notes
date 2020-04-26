import React from 'react'
import Chip from './Chip'
import { action } from '@storybook/addon-actions'

import 'react-tippy/dist/tippy.css'

export default { title: 'Chip' }

export const chip = () => <Chip>Hello world</Chip>
export const chipWithBigContent = () => <Chip>Hello world this is a very big content</Chip>
export const chipWithRemoveAction = () => (
  <Chip isRemovable onRemove={action('Remove action')}>
    This is isRemovable
  </Chip>
)
