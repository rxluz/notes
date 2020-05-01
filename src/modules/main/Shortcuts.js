import React from 'react'
import { withRouter } from 'react-router'

import { hotkeys } from 'react-keyboard-shortcuts'

class Shortcuts extends React.PureComponent {
  hot_keys = {
    'alt+n': {
      priority: 1,
      handler: () => this.props.history.push('/new'),
    },
    'alt+p': {
      priority: 1,
      handler: () => this.props.history.push('/settings'),
    },
    'alt+s': {
      priority: 1,
      handler: () => this.props.history.push('/search'),
    },
    'alt+a': {
      priority: 1,
      handler: () => this.props.history.push('/'),
    },
    'alt+h': {
      priority: 1,
      handler: () => this.props.history.push('/shortcuts'),
    },
  }

  render() {
    return this.props.children
  }
}

export default withRouter(hotkeys(Shortcuts))
