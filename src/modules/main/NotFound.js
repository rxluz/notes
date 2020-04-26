import React from 'react'
import * as PropTypes from 'prop-types'
import NotFoundImg from './not-found.jpg'

const NotFound = (_props, context) => {
  const { t: translate } = context

  return (
    <div class="center">
      <div class="no-javascript">
        <img
          src={NotFoundImg}
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
