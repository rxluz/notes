import React from 'react'

import { Switch, Route } from 'react-router-dom'

import NotFound from 'modules/main/NotFound'
import Add from 'modules/note/Add'
import Edit from 'modules/note/Edit'
import Notes from 'modules/notes/Notes'
import SearchResults from 'modules/search/SearchResults'
import Search from 'modules/search/Search'
import Settings from 'modules/settings/Settings'
import Shortcuts from 'modules/shortcuts/Shortcuts'

const RoutesList = () => (
  <Switch>
    <Route path="/new" exact={true}>
      <Add />
    </Route>
    <Route path="/edit/:uuid">
      <Edit />
    </Route>
    <Route path="/search/" exact={true}>
      <Search />
    </Route>
    <Route path="/search/:searchTerm" exact={true}>
      <SearchResults />
    </Route>
    <Route path="/settings" exact={true}>
      <Settings />
    </Route>
    <Route path="/shortcuts" exact={true}>
      <Shortcuts />
    </Route>
    <Route path="/" exact={true}>
      <Notes />
    </Route>

    <Route path="*" exact={true}>
      <NotFound />
    </Route>
  </Switch>
)

export default RoutesList
