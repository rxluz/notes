import React from 'react'

import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import './ToggleWithDescription.scss'

const ToggleWithDescription = ({
  children,
  isActive = false,
  title = '',
  addClass = '',
  description = '',
  onToggle = () => {},
  translate = (text) => text,
} = {}) => {
  return (
    <div className={`twd ${addClass}`}>
      <div className="twd__title">{title}</div>
      <div className="twd__description">{description}</div>

      <div className="twd__button">
        <Toggle
          defaultChecked={isActive}
          onClick={onToggle}
          aria-labelledby={title}
          icons={false}
        />
      </div>
    </div>
  )
}

export default ToggleWithDescription
