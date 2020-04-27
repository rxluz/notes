import React from 'react'

import { Tooltip } from 'react-tippy'

import './Icon.scss'

const renderTip = ({ tip, content }) => {
  const hasTip = !!tip
  return hasTip ? (
    <Tooltip title={tip} position="bottom" trigger="mouseenter">
      {content}
    </Tooltip>
  ) : (
    content
  )
}

const Icon = ({
  children: IconElement,
  isActive = false,
  onClick = () => {},
  tip = false,
  translate = (text) => text,
} = {}) => {
  return (
    <i className={`icon icon__state-${isActive ? 'active' : 'default'}`}>
      {renderTip({ content: IconElement, tip })}
    </i>
  )
}

export default Icon
