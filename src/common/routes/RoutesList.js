import React from 'react'

import { Switch, Route } from 'react-router-dom'

import NotFound from 'Modules/main/NotFound'
import Add from 'Modules/note/Add'
import Edit from 'Modules/note/Edit'
import Notes from 'Modules/notes/Notes'
import SearchResults from 'Modules/search/SearchResults'
import Search from 'Modules/search/Search'
import Settings from 'Modules/settings/Settings'
import Shortcuts from 'Modules/shortcuts/Shortcuts'

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
