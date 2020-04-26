import React from 'react'
import * as PropTypes from 'prop-types'
import './Main.scss'
import 'react-tippy/dist/tippy.css'

import RoutesList from 'Common/routes/RoutesList'
import BodyClasses from 'Modules/main/BodyClasses'

const Main = (_props, context) => {
  // const { t: translate } = context

  return (
    <BodyClasses>
      HELLO
      <div className="App">
        {/* {translate('Hello world', {}, 'Testing the translation system')} */}
        <RoutesList />
      </div>
    </BodyClasses>
  )
}

Main.contextTypes = {
  t: PropTypes.func,
}

export default Main
