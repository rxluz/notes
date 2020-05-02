import React from 'common/components/tooltip/node_modules/react'
import Tooltip from './Tooltip'
import { action } from 'common/components/tooltip/node_modules/@storybook/addon-actions'
import { Light, Dark } from 'common/components/tooltip/node_modules/common/utils/storybookMode'

import 'common/components/tooltip/node_modules/react-tippy/dist/tippy.css'

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
