import React from 'react'
import { Tooltip } from 'react-tippy'

const ColourSwitchItem = ({ onClick, addClass = '', tip = false, colour }) => {
  const content = (
    <div
      className={`colour-switch__item  ${addClass} ${colour}-border`}
      onClick={() => onClick({ colour })}
    ></div>
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

export default ColourSwitchItem
