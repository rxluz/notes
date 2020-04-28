import React from 'react'
import { Tooltip } from 'react-tippy'

const IconTextSwitchItem = ({ onClick, addClass = '', tip = false, text, value }) => {
  const content = (
    <div
      className={`icon-text-switch__item  ${addClass} `}
      onClick={() => onClick({ text, value })}
    >
      {text}
    </div>
  )

  const hasTip = !!tip

  return hasTip ? (
    <Tooltip title={tip} position="bottom" trigger="mouseenter">
      {content}
    </Tooltip>
  ) : (
    content
  )
}

export default IconTextSwitchItem
