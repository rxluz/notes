import React from 'react'
import './Main.scss'
import 'react-tippy/dist/tippy.css'

import RoutesList from '../../common/routes/RoutesList'

const Main = () => {
  return (
    <div className="App">
      <RoutesList />
    </div>
  )
}

export default Main
