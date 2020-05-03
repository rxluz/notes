import React from 'react'
import * as PropTypes from 'prop-types'
import './Main.scss'
import 'react-tippy/dist/tippy.css'

import RoutesList from 'common/routes/RoutesList'
import BodyClasses from 'modules/main/BodyClasses'
import Shortcuts from 'modules/main/Shortcuts'

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
