import React from 'react'
import * as PropTypes from 'prop-types'
import './Main.scss'
import 'react-tippy/dist/tippy.css'

import RoutesList from 'Common/routes/RoutesList'
import BodyClasses from 'Modules/main/BodyClasses'

const Main = (_props, context) => {
  return (
    <BodyClasses>
      <div className="App">
        <RoutesList />
      </div>
    </BodyClasses>
  )
}

Main.contextTypes = {
  t: PropTypes.func,
}

export default Main
