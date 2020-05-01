import React from 'react'
import * as PropTypes from 'prop-types'
import './Main.scss'
import 'react-tippy/dist/tippy.css'

import RoutesList from 'Common/routes/RoutesList'
import BodyClasses from 'Modules/main/BodyClasses'
import Shortcuts from 'Modules/main/Shortcuts'

const Main = (_props, context) => {
  return (
    <BodyClasses>
      <Shortcuts>
        <div className="App">
          <RoutesList />
        </div>
      </Shortcuts>
    </BodyClasses>
  )
}

Main.contextTypes = {
  t: PropTypes.func,
}

export default Main
