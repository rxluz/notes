import React from 'react'
import { Tooltip } from 'react-tippy'

import { isMobileOrTablet } from 'common/utils/browser.utils'

import 'react-tippy/dist/tippy.css'

const TooltipWrapper = ({
  children,
  title = '',
  position = 'bottom',
  trigger = 'mouseenter',
} = {}) =>
  isMobileOrTablet() ? (
    children
  ) : (
    <Tooltip title={title} position={position} trigger={trigger}>
      {children}
    </Tooltip>
  )

export default TooltipWrapper
