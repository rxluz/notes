import React from 'react'
import * as PropTypes from 'prop-types'

import { withRouter } from 'react-router'

import ShortcutsPage from './ShortcutsPage'

const Shortcuts = (props, { t: translate }) => (
  <ShortcutsPage onClose={() => props.history.goBack()} translate={translate} />
)

Shortcuts.contextTypes = {
  t: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}

export default withRouter(Shortcuts)
