import React from 'react'

import { Switch, Route } from 'react-router-dom'
import TestRoute from './TestRoute'
import NotFound from 'Modules/main/NotFound'
import Add from 'Modules/note/Add'
import Edit from 'Modules/note/Edit'

const RoutesList = () => (
  <Switch>
    <Route path="/new" exact={true}>
      <Add />
    </Route>
    <Route path="/edit/:uuid">
      <Edit />
    </Route>
    <Route path="/search/" exact={true}>
      <TestRoute title="Search screen" />
    </Route>
    <Route path="/search/:term" exact={true}>
      <TestRoute title="Search term" />
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
