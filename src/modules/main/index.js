import React from 'react'
import * as PropTypes from 'prop-types'
import './Main.scss'
import 'react-tippy/dist/tippy.css'

import RoutesList from '../../common/routes/RoutesList'

const Main = (_props, context) => {
  const { t: translate } = context

  return (
    <div className="App">
      {translate('Hello world', {}, 'Testing the translation system')}
      <RoutesList />
    </div>
  )
}

Main.contextTypes = {
  t: PropTypes.func,
}

export default Main
