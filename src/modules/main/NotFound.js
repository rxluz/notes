import React from 'react'
import * as PropTypes from 'prop-types'

const NotFound = (_props, context) => {
  const { t: translate } = context

  return (
    <div className="center">
      <div className="no-javascript">
        <img
          src={require('./not-found.png')}
          alt={translate('An nonsense illustration from absurd.design', {}, 'image credits')}
        />
        <br />
        {translate('Page not found', {}, '404 main text')} <br />
        <a href="/">{translate('Go to home', {}, 'image credits')}</a>
      </div>
    </div>
  )
}

NotFound.contextTypes = {
  t: PropTypes.func,
}

export default NotFound
