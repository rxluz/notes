import React from 'react'

import { Switch, Route } from 'react-router-dom'
import TestRoute from './TestRoute'
import NotFound from 'Modules/main/NotFound'

const RoutesList = () => (
  <Switch>
    <Route path="/new" exact={true}>
      <TestRoute title="Create a new note" />
    </Route>
    <Route path="/settings" exact={true}>
      <TestRoute title="settings page" />
    </Route>
    <Route path="/shortcuts" exact={true}>
      <TestRoute title="shortcuts page" />
    </Route>
    <Route path="/" exact={true}>
      <TestRoute title="List all notes" />
    </Route>

    <Route path="*" exact={true}>
      <NotFound />
    </Route>
  </Switch>
)

export default RoutesList
