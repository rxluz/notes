import React from 'react'
import KeyShortcutInfo from './KeyShortcutInfo'
import { Light, Dark } from 'common/utils/storybookMode'

import 'react-tippy/dist/tippy.css'

export default { title: 'KeyShortcutInfo' }

export const keyShortcutInfo = () => (
  <Light>
    <KeyShortcutInfo keys={['control', 'command', 'meta']} description="do something cool" />
  </Light>
)
export const keyShortcutInfoDarkMode = () => (
  <Dark>
    <KeyShortcutInfo keys={['control', 'command', 'meta']} description="do something cool" />
  </Dark>
)
