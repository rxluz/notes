import React from 'react'
import ToggleWithDescription from './ToggleWithDescription'
import { action } from '@storybook/addon-actions'
import { Light, Dark } from 'common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'ToggleWithDescription' }

export const toggleWithDescription = () => (
  <Light>
    <ToggleWithDescription
      title="Hello world"
      description="a more long description to check the available space"
    />
  </Light>
)

export const toggleWithDescriptionWithOnToggleAction = () => (
  <Light>
    <ToggleWithDescription
      title="Hello world"
      description="a more long description to check the available space"
      onToggle={action('toggle action')}
    />
  </Light>
)
export const toggleWithDescriptionDarkMode = () => (
  <Dark>
    <ToggleWithDescription
      title="Hello world"
      description="a more long description to check the available space"
      onToggle={action('toggle action')}
    />
  </Dark>
)
