import React from 'react'
import * as PropTypes from 'prop-types'

import { withRouter } from 'react-router'

import { searchInterface } from './search.interface'
import SearchPage from './SearchPage'

const Search = (props = searchInterface, { t: translate }) => (
  <SearchPage
    onSearch={(term) => props.history.push(`/search/${term}`)}
    onClose={() => props.history.push('')}
    translate={translate}
  />
)

Search.contextTypes = {
  t: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}

export default withRouter(Search)
